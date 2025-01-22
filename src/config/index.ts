import { PROJECT_ID } from "@/constant";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solanaTestnet } from "@reown/appkit/networks";
import { solanaDevnet } from "@reown/appkit/networks";
import { solana } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

export const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

export const projectId = PROJECT_ID ?? "";

export const metadata = {
  name: "AppKit",
  description: "AppKit Solana Example",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

export const createAppKitMethod = () => createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId: projectId,
  features: {
    analytics: true,
  },
});
