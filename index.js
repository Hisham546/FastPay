/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <ApplicationProvider {...eva} theme={eva.light}>
     <App />
     </ApplicationProvider>
     </QueryClientProvider>
  )
AppRegistry.registerComponent(appName, () => Root);
