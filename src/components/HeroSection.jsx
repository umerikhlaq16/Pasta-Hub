import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen lg:min-h-[90vh] bg-[#0a0a0a] flex items-center overflow-hidden px-4 sm:px-6 py-12 md:py-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-orange-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-orange-900/10 blur-[80px] md:blur-[120px] rounded-full"></div>
      </div>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10 w-full">

        {/*  LEFT TEXT CONTENT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="space-y-2 md:space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-orange-500 font-mono tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase block"
            >
              / Authentic Italian
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] md:leading-[0.9] text-white uppercase tracking-tighter">
              CRAFTING <br /> 
              <span className="text-transparent stroke-text italic">PERFECTION</span>
            </h1>
          </div>

          <p className="text-sm md:text-lg text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed border-l-0 lg:border-l-2 border-orange-600 pl-0 lg:pl-6">
            Experience the art of handmade pasta where tradition meets 
            modern bold flavors. A culinary journey into the heart of Italy.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="group relative px-8 py-4 bg-orange-600 text-white font-bold uppercase text-xs md:text-sm tracking-widest overflow-hidden transition-all hover:bg-orange-500 w-full sm:w-auto">
              <span className="relative z-10">Explore Menu</span>
              <motion.div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
              Book A Table
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (Floating Effect) */}
        <motion.div
          className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Decorative Ring - Hidden on very small screens to avoid clutter */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] md:w-[120%] md:h-[120%] border border-white/5 rounded-full pointer-events-none hidden sm:block" />
          
          <motion.img
            src="/hero.png"
            alt="Signature Dish"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10"
          />

          {/* Floating Badge - Scaled and positioned for mobile */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-5 -right-5 sm:-top-10 sm:right-0 md:right-10 w-24 h-24 md:w-32 md:h-32"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-orange-500/10 md:fill-orange-500/20">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[9px] md:text-[10px] uppercase tracking-[2px] fill-orange-500 font-bold">
                <textPath xlinkHref="#circlePath">
                  Premium Quality • Fresh Pasta • Best Taste •
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>

      </section>

      {/* CSS for Outlined Text */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
        @media (max-width: 640px) {
          .stroke-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.4);
          }
        }
      `}</style>
    </div>
  );
}