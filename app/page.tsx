import AppBanner from "@/components/AppBanner";
import { Categories } from "@/components/Categories";
import { Dontmiss } from "@/components/Dontmiss";
import { Essentials } from "@/components/Essentials";
import { Featured } from "@/components/Featured";
import GearUp from "@/components/Gear-up";

import { HeroSection } from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppBanner />
      <div className="px-8 pb-12">
        <HeroSection />
        <ProductCarousel/>
        <Featured/>
        <GearUp/>
        <Dontmiss/>
        <Essentials />
        <div className="flex justify-center">
          <div className="w-[880px] h-[192px] ">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
