// import 'react-native-gesture-handler';
// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import StackNavigator from './src/navigation/StackNavigator';
// import { Provider } from 'react-redux';
// import store from './src/store';
// import "node-libs-react-native/globals"
// import "react-native-url-polyfill/auto"
// import "react-native-get-random-values"

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Provider store={store}>
//         <StackNavigator />
//       </Provider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;




import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import "node-libs-react-native/globals"
import "react-native-url-polyfill/auto"
import "react-native-get-random-values"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi';
import { config } from './wagmi-config';

const queryClient = new QueryClient();
const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Provider store={store}>
            <StackNavigator />
          </Provider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;

// import 'react-native-gesture-handler';
// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import StackNavigator from './src/navigation/StackNavigator';
// import { Provider } from 'react-redux';
// import store from './src/store';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { WagmiProvider } from 'wagmi';
// import { config } from "./wagmi-config"
// // import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Create query client instance
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // Disable refetch on window focus in React Native
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// // Optional: Create persister for React Query
// // const asyncStoragePersister = createAsyncStoragePersister({
// //   storage: AsyncStorage,
// // });

// const App = () => {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <GestureHandlerRootView style={{ flex: 1 }}>
//           <Provider store={store}>
//             <StackNavigator />
//           </Provider>
//         </GestureHandlerRootView>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// };

// export default App;
