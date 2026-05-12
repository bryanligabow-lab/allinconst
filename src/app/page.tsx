import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Preloader } from "@/components/Preloader";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <FloatingWhatsApp />
    </>
  );
}
