import Hero from "@/components/sections/hero";
import FeaturedProjects from "@/components/sections/featured-projects";
import Services from "@/components/sections/services-preview";
import About from "@/components/sections/about-preview";
import CTAContact from "@/components/sections/cta-contact";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProjects />
      <Services />
      <About />
      <Testimonials />
      <CTAContact />
    </div>
  );
}