import {AppRegistry} from 'react-native';
import t from 'RNTask/base64Polyfill';
import App from 'RNTask/App';
import {name as appName} from 'RNTask/app.json';

import React from 'react';

const Application = () => <App />;

AppRegistry.registerComponent(appName, () => Application, t);
