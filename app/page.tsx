import {
  Header,
  Brand,
  Services,
  Travel,
  Features,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Brand />
      {/* <Services /> */}
      <Travel />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
