import { Route, Routes } from "react-router";

import Home from "./pages/home";
import { UserDetails } from "./pages/user-details";
import { Leaderboard } from "./pages/leaderboard";
import { Referrals } from "./pages/referrals";
import { MainLayout } from "./components/layout/main-layout";
import { createAppKitMethod } from "./config";

createAppKitMethod()

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
