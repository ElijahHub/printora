import {
  Banner,
  Feature,
  Header,
  Process,
  Products,
  Reviews,
  CTA,
} from "@/components";

export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Banner />
      {/* Category List */}
      <Feature />
      {/* Product List */}
      <Products />
      <CTA />
      <Process />
      <Reviews />
      {/* Footer */}
    </div>
  );
}
