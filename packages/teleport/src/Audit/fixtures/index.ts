/*
Copyright 2019 Gravitational, Inc.

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

import { makeEvent } from 'teleport/services/audit';

export const events = [
  {
    code: 'T1004I',
    uid: 'b121fc4c-e419-56a2-a760-19cd746c0650',
    time: '2020-06-05T16:24:05Z',
    event: 'user.delete',
    name: 'bob',
    user: 'benarent',
  },
  {
    code: 'T1003I',
    event: 'user.update',
    name: 'bob',
    time: '2020-06-05T16:24:05Z',
    uid: '3a8cd55b5-bce9-5a4c-882d-8e0a5ae10008',
    expires: 111111,
    roles: ['root'],
  },
  {
    code: 'T4002I',
    event: 'session.network',
    namespace: 'default',
    sid: '44c6cea8-362f-11ea-83aa-125400432324',
    server_id: '96f2bed2',
    login: 'root',
    user: 'benarent',
    pid: 2653,
    cgroup_id: 4294968064,
    program: 'bash',
    src_addr: '10.217.136.161',
    dst_addr: '190.58.129.4',
    dst_port: '3000',
    version: 4,
    time: '2019-04-22T19:39:26.676Z',
  },
  {
    code: 'T4001I',
    event: 'session.disk',
    namespace: 'default',
    sid: '44c6cea8-362f-11ea-83aa-125400432324',
    server_id: '96f2bed2',
    login: 'root',
    user: 'benarent',
    pid: 2653,
    cgroup_id: 4294968064,
    program: 'bash',
    path: '/etc/profile.d/',
    flags: 2100000,
    return_code: 0,
    time: '2019-04-22T19:39:26.676Z',
  },
  {
    argv: ['google.com'],
    cgroup_id: 4294968064,
    code: 'T4000I',
    ei: 5,
    event: 'session.command',
    login: 'root',
    namespace: 'default',
    path: '/bin/ping',
    pid: 2653,
    ppid: 2660,
    program: 'ping',
    return_code: 0,
    server_id: '96f2bed2-ebd1-494a-945c-2fd57de41644',
    sid: '44c6cea8-362f-11ea-83aa-125400432324',
    time: '2020-01-13T18:05:53.919Z',
    uid: '734930bb-00e6-4ee6-8798-37f1e9473fac',
    user: 'benarent',
  },
  {
    id: '66b827b2-1b0b-512b-965d-6c789388d3c9',
    code: 'T5000I',
    event: 'access_request.create',
    time: '2020-06-05T19:26:53Z',
    uid: '68a83a99-73ce-4bd7-bbf7-99103c2ba6a0',
    user: 'Carrie_Sandoval',
    state: 'PENDING',
    roles: ['admin'],
  },
  {
    id: '66b827b2-1b0b-512b-965d-6c789388d3c9',
    code: 'T5001I',
    event: 'access_request.update',
    time: '2020-06-05T19:26:53Z',
    uid: '68a83a99-73ce-4bd7-bbf7-99103c2ba6a0',
    state: 'APPROVED',
    updated_by: 'Sam_Waters',
  },
  {
    'addr.local': '172.10.1.1:3022',
    'addr.remote': '172.10.1.254:46992',
    code: 'T2006I',
    ei: 2147483646,
    event: 'session.data',
    login: 'root',
    rx: 3974,
    server_id: 'b331fb6c-85f9-4cb0-b308-3452420bf81e',
    sid: '5fc8bf85-a73e-11ea-afd1-0242ac0a0101',
    time: '2020-06-05T15:14:51Z',
    tx: 4730,
    uid: '2f2f07d0-8a01-4abe-b1c0-5001fd86829b',
    user: 'Stanley_Cooper',
  },
  {
    code: 'T6000I',
    name: 'hello',
    event: 'reset_password_token.create',
    time: '2020-06-05T16:24:22Z',
    ttl: '8h0m0s',
    uid: '85fef5df-6dca-475e-a049-393f4cf1d6a3',
    user: 'b331fb6c-85f9-4cb0-b308-3452420bf81e.one',
  },
  {
    code: 'T8000I',
    event: 'github.created',
    name: 'new_github_connector',
    time: '2020-06-05T19:28:00Z',
    uid: '2b7bb323-35d1-4b9c-9a6d-00ab34c95fb8',
    user: 'unimplemented',
  },
  {
    code: 'T8001I',
    event: 'github.deleted',
    name: 'new_github_connector',
    time: '2020-06-05T19:28:28Z',
    uid: '26f12a67-d593-40df-b3d3-965faee60143',
    user: 'unimplemented',
  },
  {
    code: 'T8100I',
    event: 'oidc.created',
    name: 'new_oidc_connector',
    time: '2020-06-05T19:29:14Z',
    uid: '6208b4b9-0077-41aa-967a-f173b6bcc0d3',
    user: 'unimplemented',
  },
  {
    code: 'T1002I',
    connector: 'local',
    name: 'hello',
    event: 'user.create',
    expires: '0001-01-01T00:00:00Z',
    roles: ['admin'],
    time: '2020-06-05T16:24:05Z',
    uid: '22a273678c-ee78-5ffc-a298-68a841555c98',
    user: 'b331fb6c-85f9-4cb0-b308-3452420bf81e.one',
  },
  {
    code: 'T1005I',
    event: 'user.password_change',
    time: '2020-06-05T19:26:53Z',
    uid: '68a83a99-73ce-4bd7-bbf7-99103c2ba6a0',
    user: 'Ivan_Jordan',
  },
  {
    'addr.local': '172.10.1.1:3022',
    'addr.remote': '172.10.1.254:46992',
    code: 'T2006I',
    ei: 2147483646,
    event: 'session.data',
    login: 'root',
    rx: 3974,
    server_id: 'b331fb6c-85f9-4cb0-b308-3452420bf81e',
    sid: '5fc8bf85-a73e-11ea-afd1-0242ac0a0101',
    time: '2020-06-05T15:14:51Z',
    tx: 4730,
    uid: '2f2f07d0-8a01-4abe-b1c0-5001fd86829b',
    user: 'Betty_Dixon',
  },
  {
    code: 'T1000I',
    event: 'user.login',
    method: 'local',
    success: true,
    time: '2019-04-22T00:49:03Z',
    uid: '173d6b6e-d613-44be-8ff6-f9f893791ef2',
    user: 'admin@example.com',
  },
  {
    code: 'T3007W',
    error:
      'ssh: principal "fsdfdsf" not in the set of valid principals for given certificate: ["root"]',
    event: 'auth',
    success: false,
    time: '2019-04-22T02:09:06Z',
    uid: '036659d6-fdf7-40a4-aa80-74d6ac73b9c0',
    user: 'admin@example.com',
  },
  {
    code: 'T1000W',
    error: 'user(name="fsdfsdf") not found',
    event: 'user.login',
    method: 'local',
    success: false,
    time: '2019-04-22T18:06:32Z',
    uid: '597bf08b-75b2-4dda-a578-e387c5ce9b76',
    user: 'fsdfsdf',
  },
  {
    'addr.local': '172.31.28.130:3022',
    'addr.remote': '151.181.228.114:51454',
    code: 'T2000I',
    ei: 0,
    event: 'session.start',
    login: 'root',
    namespace: 'default',
    server_id: 'de3800ea-69d9-4d72-a108-97e57f8eb393',
    sid: '56408539-6536-11e9-80a1-427cfde50f5a',
    size: '80:25',
    time: '2019-04-22T19:39:26.676Z',
    uid: '84c07a99-856c-419f-9de5-15560451a116',
    user: 'admin@example.com',
  },
  {
    code: 'T2002I',
    ei: 3,
    event: 'resize',
    login: 'root',
    namespace: 'default',
    sid: '56408539-6536-11e9-80a1-427cfde50f5a',
    size: '80:25',
    time: '2019-04-22T19:39:52.432Z',
    uid: '917d8108-3617-4273-ab37-7bbf8e7c1ab9',
    user: 'admin@example.com',
  },
  {
    code: 'T2004I',
    ei: 10,
    event: 'session.end',
    namespace: 'default',
    sid: '9febab45-6491-11e9-80a1-427cfde50f5a',
    time: '2021-05-12T01:26:22.613Z',
    uid: '6bf836ee-197c-453e-98e5-31511935f22a',
    user: 'root',
    server_hostname: 'node-hostname',
  },
  {
    code: 'T2004I',
    ei: 29,
    enhanced_recording: false,
    event: 'session.end',
    interactive: true,
    namespace: 'default',
    participants: ['root'],
    server_addr: '192.168.86.47:3022',
    server_hostname: 'im-a-nodename',
    server_id: 'e1826ad2-4b7d-464b-8891-54cf7fedb7fb',
    session_start: '2020-07-15T19:01:24.660230257Z',
    session_stop: '2020-07-15T19:03:05.193252488Z',
    sid: '941a4c65-c6cd-11ea-9bef-482ae3513733',
    time: '2021-05-12T01:26:22.613Z',
    uid: '0ca9c34b-f13b-458d-9bdf-c5b5cd1660d3',
    user: 'root',
  },
  {
    cluster_name: 'im-a-cluster-name',
    code: 'T2004I',
    ei: 3,
    enhanced_recording: false,
    event: 'session.end',
    interactive: true,
    namespace: 'default',
    participants: ['root'],
    server_addr: '192.168.0.105:3022',
    server_hostname: 'im-a-nodename',
    server_id: '7df6e1-29b487e-018cd162',
    session_recording: 'off',
    session_start: '2021-05-12T01:26:16.624683927Z',
    session_stop: '2021-05-12T01:26:22.61263808Z',
    sid: '5ef7244c-0f7b-4f57-80b0-26a79f960aae',
    time: '2021-05-12T01:26:22.613Z',
    uid: '9b19a0a5-24bcd3adb249b',
    user: 'root',
  },
  {
    'addr.local': '172.31.28.130:3022',
    'addr.remote': '151.181.228.114:51752',
    code: 'T2001I',
    ei: 4,
    event: 'session.join',
    login: 'root',
    namespace: 'default',
    server_id: 'de3800ea-69d9-4d72-a108-97e57f8eb393',
    sid: '56408539-6536-11e9-80a1-427cfde50f5a',
    time: '2019-04-22T19:39:52.434Z',
    uid: '13d26190-289b-41d4-af67-c8c8b0617ebe',
    user: 'admin@example.com',
  },
  {
    code: 'T3004I',
    action: 'download',
    'addr.local': '172.31.28.130:3022',
    'addr.remote': '127.0.0.1:55594',
    event: 'scp',
    login: 'root',
    namespace: 'default',
    path: '~/fsdfsdfsdfsdfs',
    time: '2019-04-22T19:41:23Z',
    uid: '183ca6de-c24b-4f67-854f-163c01245fa1',
    user: 'admin@example.com',
  },
  {
    'addr.remote': '50.34.48.113:56902',
    code: 'T2007I',
    ei: 0,
    event: 'app.session.start',
    namespace: 'default',
    public_addr: 'dumper.test.domain.com',
    server_id: 'a0518380-0d53-4188-ac8b-8ddd8103e45b',
    sid: '6593cf87-9839-4f18-abf8-c54873aaeb4e',
    time: '2020-10-30T17:28:14.381Z',
    uid: '80400ed9-644e-4a6e-ab99-b264b34d0f55',
    user: 'kimlisa',
  },
  {
    code: 'T2008I',
    ei: 0,
    event: 'app.session.chunk',
    namespace: 'default',
    server_id: 'a0518380-0d53-4188-ac8b-8ddd8103e45b',
    session_chunk_id: '3a54f32d-210f-4338-abf5-133bfe19ccc0',
    sid: '6593cf87-9839-4f18-abf8-c54873aaeb4e',
    time: '2020-10-30T17:28:14.705Z',
    uid: '8ea5be3d-07b1-4308-8e0d-2d2ec57cbb20',
    user: '',
  },
  {
    code: 'T3002I',
    proto: 'kube',
    kubernetes_cluster: 'clusterOne',
    ei: 0,
    'addr.local': '172.31.28.130:3022',
    'addr.remote': '151.181.228.114:51752',
    event: 'exec',
    namespace: 'default',
    sid: '8d57a9d5-3848-5ce2-a326-85eb4a6d2eed',
    time: '2020-10-30T17:28:14.705Z',
    uid: '8ea5be3d-07b1-4308-8e0d-2d2ec57cbb20',
    user: 'alex',
  },
  {
    'addr.local': '127.0.0.1:3027',
    'addr.remote': '[::1]:43026',
    code: 'T3009I',
    ei: 0,
    event: 'kube.request',
    kubernetes_cluster: 'gke_teleport-a',
    login: 'awly',
    namespace: 'default',
    proto: 'kube',
    request_path: '/api/v1/namespaces/teletest/pods/test-pod',
    resource_api_group: 'core/v1',
    resource_kind: 'pods',
    resource_name: 'test-pod',
    resource_namespace: 'teletest',
    response_code: 200,
    server_id: '9b67377e-d61e-4865-96d6-fa71989fd9e9',
    time: '2020-11-12T20:35:44.978Z',
    uid: '8c1459a8-9199-4d25-bc5d-38e000ddd9ab',
    user: 'alex',
    verb: 'GET',
  },
  {
    cluster_name: 'localhost',
    code: 'T1006I',
    mfa_device_name: 'usb-c',
    mfa_device_type: 'U2F',
    mfa_device_uuid: '7a6fbf23-d75c-4c62-8215-e962d0f2a1f3',
    ei: 0,
    event: 'mfa.delete',
    time: '2021-03-03T22:58:34.737Z',
    uid: '9be91d9e-79ec-422b-b6ae-ccf7235476d4',
    user: 'awly',
  },
  {
    cluster_name: 'localhost',
    code: 'T1007I',
    mfa_device_name: 'usb-c',
    mfa_device_type: 'U2F',
    mfa_device_uuid: '7a6fbf23-d75c-4c62-8215-e962d0f2a1f3',
    ei: 0,
    event: 'mfa.delete',
    time: '2021-03-03T22:58:44.737Z',
    uid: 'c6afe861-d53c-42ce-837c-7920d2398b44',
    user: 'awly',
  },
  {
    cluster_name: 'some-name',
    code: 'TBL03I',
    ei: 0,
    event: 'billing.update_info',
    time: '2021-03-18T16:29:15.719Z',
    uid: '95344b33-d25c-4875-896e-f21abc911547',
    user: 'root',
  },
  {
    cluster_name: 'some-name',
    code: 'TBL00I',
    ei: 0,
    event: 'billing.create_card',
    time: '2021-03-18T16:29:05.044Z',
    uid: '5c40b62a-4ddd-466c-87a0-fa2922f743d0',
    user: 'root',
  },
  {
    cluster_name: 'some-name',
    code: 'TBL01I',
    ei: 0,
    event: 'billing.delete_card',
    time: '2021-03-18T16:28:51.219Z',
    uid: '056517e0-f7e1-4286-b437-c75f3a865af4',
    user: 'root',
  },
  {
    cluster_name: 'some-name',
    code: 'TBL02I',
    ei: 0,
    event: 'billing.update_card',
    time: '2021-03-18T16:28:49.067Z',
    uid: '0a06aba1-b87c-4d58-8922-e173f6b9729f',
    user: 'root',
  },
].map(makeEvent);
