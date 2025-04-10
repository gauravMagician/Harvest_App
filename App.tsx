import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StackNavigator />
      </Provider>

    </GestureHandlerRootView>
  );
};

export default App;
