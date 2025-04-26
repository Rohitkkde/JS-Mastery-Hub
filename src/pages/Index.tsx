
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen relative z-10">
      <Navbar />
      <Hero />
      <TestimonialSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;
