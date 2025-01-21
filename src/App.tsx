import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Route, Routes } from "react-router";

import Home from "./pages/home";
import { UserDetails } from "./pages/user-details";
import { Leaderboard } from "./pages/leaderboard";
import { Referrals } from "./pages/referrals";
import { MainLayout } from "./components/layout/main-layout";

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const projectId =
  process.env.REACT_APP_PROJECT_ID ?? "015cbdcb4bc1c9ea64fd7d5aaff72890";

const metadata = {
  name: "AppKit",
  description: "AppKit Solana Example",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id/referral" element={<Referrals />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}
