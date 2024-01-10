import {
  HeaderGallery,
  ProductInfo,
  Pricing,
  HowItWorks,
  Testimonials,
  FAQ,
  Footer,
} from "@/components/index";

import ResponsiveAppBar from "@/components/ResponsiveAppBar";

export const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <HeaderGallery />
      <ProductInfo />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
