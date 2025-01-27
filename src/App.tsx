import { Route, Routes } from "react-router";

import Home from "./pages/home";
import { UserDetails } from "./pages/user-details";
import { Leaderboard } from "./pages/leaderboard";
import { Referrals } from "./pages/referrals";
import { MainLayout } from "./components/layout/main-layout";
import { auth, createAppKitMethod } from "./config";
import { useOnboardUser } from "./hooks/use-onboard-user";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

createAppKitMethod();

export default function App() {
  const { mutate: onboardUser } = useOnboardUser();
  const { address: walletAddress, isConnected } = useAppKitAccount();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (isConnected && user) {
      onboardUser({ walletAddress: walletAddress ?? "", email: user?.email ?? "", referralCode: "" });
    }
  }, [isConnected, onboardUser, user, walletAddress]);

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
