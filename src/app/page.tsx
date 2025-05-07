import bgImg from "@/assets/space.jpg";
import Navbar from "@/components/layout/Navbar";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-950/20 text-white overflow-hidden">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
