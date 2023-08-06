import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survey />
    </main>
  );
}
