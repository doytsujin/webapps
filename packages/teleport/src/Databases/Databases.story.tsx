/*
Copyright 2021 Gravitational, Inc.

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

import React from 'react';
import { Databases } from './Databases';
import { databases } from './fixtures';

export default {
  title: 'Teleport/Databases',
};

export const Loaded = () => (
  <Databases {...props} attempt={{ status: 'success' }} />
);

export const Loading = () => (
  <Databases {...props} attempt={{ status: 'processing' }} />
);

export const Failed = () => (
  <Databases
    {...props}
    attempt={{ status: 'failed', statusText: 'Server Error' }}
  />
);

const props = {
  databases,
  isEnterprise: false,
  isLeafCluster: false,
  canCreate: false,
  isAddDatabaseVisible: false,
  hideAddDatabase: () => null,
  showAddDatabase: () => null,
  user: 'yassine',
  version: '6.1.3',
};
