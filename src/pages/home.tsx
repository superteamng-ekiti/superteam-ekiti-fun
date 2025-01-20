import { Hero } from "@/components/home/hero";
import { Header } from "../components/layout/header";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <Hero />

      <img src="/src/assets/images/bg-mesh.png" className="absolute -bottom-4 left-0 right-0 w-full h-[240px] object-cover" />
    </div>
  );
}
