/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
const Root = () => (
    <ApplicationProvider {...eva} theme={eva.light}>
     <App />
     </ApplicationProvider>
  )
AppRegistry.registerComponent(appName, () => Root);
