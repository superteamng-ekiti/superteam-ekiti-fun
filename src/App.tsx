/* eslint-disable @typescript-eslint/no-unused-vars */
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { createAppKit } from "@reown/appkit";
import Home from "./pages/home";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

const solanaAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const modal = createAppKit({
  adapters: [solanaAdapter],
  projectId: projectId,
  networks: [solana, solanaTestnet, solanaDevnet],
  features: {
    email: true,
    analytics: true,
    socials: ["google", "x"],
  },
  enableWalletConnect: false,
  // enableInjected: false,
  // enableWallets: false
  // themeMode: "light",
});

export default function App() {
  return (
    <Home />
  )
}