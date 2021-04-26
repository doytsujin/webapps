/**
 * Copyright 2021 Gravitational, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { fireEvent, render, screen } from 'design/utils/testing';
import AddDialog, { Props } from './AddDialog';

describe('correct database add command generated with given input', () => {
  test.each`
    input                     | output
    ${'self-hosted mysql'}    | ${'teleport start --roles=db --token=[generated-join-token] --auth-server=localhost:443 --db-name=[db-name] --db-protocol=mysql --db-uri=[uri]'}
    ${'rds mysql'}            | ${'teleport start --roles=db --token=[generated-join-token] --auth-server=localhost:443 --db-name=[db-name] --db-protocol=mysql --db-uri=[uri] --db-aws-region=[region]'}
    ${'self-hosted postgres'} | ${'teleport start --roles=db --token=[generated-join-token] --auth-server=localhost:443 --db-name=[db-name] --db-protocol=postgres --db-uri=[uri]'}
    ${'rds postgres'}         | ${'teleport start --roles=db --token=[generated-join-token] --auth-server=localhost:443 --db-name=[db-name] --db-protocol=postgres --db-uri=[uri] --db-aws-region=[region]'}
    ${'cloud sql postgres'}   | ${'teleport start --roles=db --token=[generated-join-token] --auth-server=localhost:443 --db-name=[db-name] --db-protocol=postgres --db-uri=[uri] --db-ca-cert=[instance-ca-filepath] --db-gcp-project-id=[project-id] --db-gcp-instance-id=[instance-id]'}
    ${'redshift'}             | ${'teleport start --roles=db --token=[generated-join-token] --auth-server=localhost:443 --db-name=[db-name] --db-protocol=postgres --db-uri=[uri] --db-aws-region=[region] --db-aws-redshift-cluster-id=[cluster-id]'}
  `(
    'should generate correct command for input: $input',
    ({ input, output }) => {
      render(<AddDialog {...props} />);

      const dropDownInputEl = document.querySelector('input');

      fireEvent.change(dropDownInputEl, { target: { value: input } });
      fireEvent.focus(dropDownInputEl);
      fireEvent.keyDown(dropDownInputEl, { key: 'Enter', keyCode: 13 });

      expect(screen.queryByText(output)).not.toBeNull();
    }
  );
});

test('correct tsh login command generated with local authType', () => {
  render(<AddDialog {...props} />);
  const output = 'tsh login --proxy=localhost:443 --auth=local --user=yassine';

  expect(screen.queryByText(output)).not.toBeNull();
});

test('correct tsh login command generated with sso authType', () => {
  render(<AddDialog {...props} authType="sso" />);
  const output = 'tsh login --proxy=localhost:443';

  expect(screen.queryByText(output)).not.toBeNull();
});

test('render instructions dialog for adding database', () => {
  render(<AddDialog {...props} />);
  expect(screen.getByTestId('Modal')).toMatchSnapshot();
});

const props: Props = {
  user: 'yassine',
  version: '6.1.3',
  onClose: () => null,
  authType: 'local',
};
