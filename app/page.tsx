import { Header, Brand, Services, Travel, Features,CTA } from "@/components";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Brand />
      {/* <Services /> */}
      <Travel />
      <Features />
      <CTA/>
    </div>
  );
}
