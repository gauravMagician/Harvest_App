// import { http, createConfig } from 'wagmi'
// import { mainnet, sepolia } from 'wagmi/chains'

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// })

import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { createStorage } from 'wagmi';
import AsyncStorage from '@react-native-async-storage/async-storage';

// React Native compatible storage
const storage = createStorage({
  storage: AsyncStorage,
  key: 'wagmi',
});

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  storage, // Add React Native compatible storage
});