import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* BLURRED BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-20">
        <img
          src="/bg.jpg"     // <-- apni image yahan rakhna (public/bg.jpg)
          className="w-full h-full object-cover scale-110 blur-2xl opacity-90"
          alt="background"
        />
      </div>

      {/* COLOR GLOW GRADIENTS (same as your image) */}
      <div className="fixed inset-0 -z-10 pointer-events-none
          bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%),
              radial-gradient(circle_at_80%_30%,rgba(255,150,50,0.25),transparent_70%),
              radial-gradient(circle_at_50%_80%,rgba(0,200,255,0.25),transparent_70%)]
      ">
      </div>

      {/* transparent layer to smooth blur */}
      <div className="fixed inset-0 -z-10 bg-white/20 backdrop-blur-3xl"></div>

      {/* SITE CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
      </div>

    </div>
  );
}
