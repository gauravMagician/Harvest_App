import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import "node-libs-react-native/globals"
import "react-native-url-polyfill/auto"
import "react-native-get-random-values"
import 'react-native-get-random-values';
import '@walletconnect/react-native-compat';
import { WagmiProvider } from 'wagmi';
import { Web3Modal } from '@web3modal/wagmi-react-native';
import { wagmiConfig } from './wagmi.config';


const App = () => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <Web3Modal />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      </GestureHandlerRootView>
    </WagmiProvider>
  );
};

export default App;



