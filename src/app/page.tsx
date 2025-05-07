import Client from "@/components/Home/Client";
import HeroSection from "@/components/Home/Hero";
import Navbar from "@/components/layout/Navbar";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-950/20 text-white relative">
      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Client />
      </div>
    </main>
  );
};

export default Homepage;
