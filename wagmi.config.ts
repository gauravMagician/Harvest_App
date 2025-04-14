import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi-react-native';
import { mainnet, arbitrum } from 'viem/chains';

// Your WalletConnect project ID from https://cloud.walletconnect.com
const projectId = 'cff4330355f813172a935faf3bf2f48f';

// Metadata for your app
const metadata = {
  name: 'Your App Name',
  description: 'Your app description',
  url: 'http://localhost:8081',
  icons: ['https://yourapp.com/icon.png'],
};

// Define chains you want to support
const chains = [mainnet, arbitrum];

// Create Wagmi config
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// Initialize Web3Modal
createWeb3Modal({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, 
});

export { wagmiConfig };