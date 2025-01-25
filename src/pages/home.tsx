import { Hero } from "@/components/home/hero";
import Repositories from "@/components/Repositories";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Hero />
      <Repositories />
    </div>
  );
}
