/*
Copyright 2019-2021 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import BufferModule from 'buffer/';

/**
 * convenience constant equal to 2^32.
 */
const TWO_TO_32 = 4294967296;

export const MessageTypeEnum = {
  RAW: 'r',
  AUDIT: 'a',
  SESSION_END: 'c',
  RESIZE: 'w',
  U2F_CHALLENGE: 'u',
  WEBAUTHN_CHALLENGE: 'n',
};

export const messageFields = {
  payload: {
    code: 0x1a,
  },

  version: {
    code: 10,
    length: 1,
    values: {
      v1: 49,
    },
  },

  type: {
    length: 1,
    code: 0x12,
    values: {
      resize: MessageTypeEnum.RESIZE.charCodeAt(0),
      data: MessageTypeEnum.RAW.charCodeAt(0),
      event: MessageTypeEnum.AUDIT.charCodeAt(0),
      close: MessageTypeEnum.SESSION_END.charCodeAt(0),
    },
  },
};

export class Protobuf {
  encode(messageType, message) {
    var buffer = [];
    this.encodeVersion(buffer);
    this.encodeType(buffer, messageType);
    this.encodePayload(buffer, message);
    return buffer;
  }

  encodeResizeMessage(message) {
    return this.encode(messageFields.type.values.resize, message);
  }

  encodeRawMessage(message) {
    return this.encode(messageFields.type.values.data, message);
  }

  encodePayload(buffer, text) {
    // set type
    buffer.push(messageFields.payload.code);

    // encode payload
    var uintArray = this._textToUintArray(text);
    this.encodeVarint(buffer, uintArray.length);
    for (var i = 0; i < uintArray.length; i++) {
      buffer.push(uintArray[i]);
    }
  }

  encodeVersion(buffer) {
    buffer[0] = messageFields.version.code;
    buffer[1] = messageFields.version.length;
    buffer[2] = messageFields.version.values.v1;
  }

  encodeType(buffer, typeValue) {
    buffer[3] = messageFields.type.code;
    buffer[4] = messageFields.type.length;
    buffer[5] = typeValue;
  }

  encodeVarint(buffer, value) {
    var lowBits = value >>> 0;
    var highBits = Math.floor((value - lowBits) / TWO_TO_32) >>> 0;
    while (highBits > 0 || lowBits > 127) {
      buffer.push((lowBits & 0x7f) | 0x80);
      lowBits = ((lowBits >>> 7) | (highBits << 25)) >>> 0;
      highBits = highBits >>> 7;
    }

    buffer.push(lowBits);
  }

  decode(uintArray) {
    var version = this.decodeVersion(uintArray);
    var type = this.decodeType(uintArray);
    var payload = this.decodePayload(uintArray);
    return {
      version,
      type,
      payload,
    };
  }

  decodeVersion(uintArray) {
    if (
      uintArray[0] === messageFields.version.code &&
      uintArray[1] === messageFields.version.length
    ) {
      return String.fromCharCode(uintArray[2]);
    }

    throw new Error('invalid version field');
  }

  decodeType(uintArray) {
    if (
      uintArray[3] === messageFields.type.code &&
      uintArray[4] === messageFields.type.length
    ) {
      return String.fromCharCode(uintArray[5]);
    }
    throw new Error('invalid type field');
  }

  decodePayload(uintArray) {
    if (!uintArray[6]) {
      return '';
    }

    if (uintArray[6] !== messageFields.payload.code) {
      throw new Error('invalid payload field');
    }

    const rawPayloadField = uintArray.slice(7);
    const [startsAt, payloadLength] = this.decodeVarint(rawPayloadField);
    const payloadBytes = rawPayloadField.slice(
      startsAt,
      startsAt + payloadLength
    );
    return this._uintArrayToText(payloadBytes);
  }

  decodeVarint(uintArray) {
    let x = 0;
    let s = 0;
    for (let i = 0; i < uintArray.length; i++) {
      var b = uintArray[i];
      if (b < 0x80) {
        if (i > 9 || (i == 9 && b > 1)) {
          throw new Error('unable to decode varint: overflow');
        }
        return [i + 1, x | (b << s)];
      }
      x = x | (b & (0x7f << s));
      s = s + 7;
    }

    throw new Error('unable to decode varint: empty array');
  }

  _textToUintArray(text) {
    return BufferModule.Buffer(text);
  }

  _uintArrayToText(uintArray) {
    // use native TextDecoder if supported
    if (window.TextDecoder) {
      return new TextDecoder('utf-8').decode(uintArray);
    } else {
      return BufferModule.Buffer(uintArray).toString();
    }
  }
}

// Polyfill for Uint8Array.slice for IE and Safari
if (!Uint8Array.prototype.slice) {
  Object.defineProperty(Uint8Array.prototype, 'slice', {
    value: Array.prototype.slice,
  });
}
