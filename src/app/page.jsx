import BannerTopIndex from "@/sections/home/bannerTop/BannerTopIndex";
import SectionIndex from "@/sections/home/section/SectionIndex";
import Section1Index from "@/sections/home/section1/Section1Index";
import Section2Index from "@/sections/home/section2/Section2Index";
import Section3Index from "@/sections/home/section3/Section3Index";
import Section4Index from "@/sections/home/section4/Section4Index";
import Section5Index from "@/sections/home/section5/Section5Index";
import Section6Index from "@/sections/home/section6/Section6Index";
import FooterIndex from "@/sections/home/footer/FooterIndex";

export default function Home() {
  return (
    <main className="overflow-hidden font-manrope">
      <BannerTopIndex></BannerTopIndex>
      <SectionIndex></SectionIndex>
      <Section1Index></Section1Index>
      <Section2Index></Section2Index>
      <Section3Index></Section3Index>
      <Section4Index></Section4Index>
      <Section5Index></Section5Index>
      <Section6Index></Section6Index>
      <FooterIndex></FooterIndex>
    </main>
  );
}
