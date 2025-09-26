import {
  Banner,
  Feature,
  Header,
  Process,
  Products,
  Reviews,
  CTA,
  CTA2,
  NewsLetter,
  Footer,
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
      <NewsLetter />
      <CTA2 />
      {/* Footer */}
      <Footer />
    </div>
  );
}
