
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturesSection from "@/components/FeaturesSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen relative z-10">
      <Navbar />
      <Hero />
      <TestimonialSection />
      <FeaturesSection />
      <TimelineSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
