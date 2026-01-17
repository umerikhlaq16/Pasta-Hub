import { motion } from "framer-motion";

export default function FeaturedDish() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h2 className="text-[25vw] font-black leading-none uppercase select-none">
          Signature
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Visual Showcase */}
        <div className="relative order-2 lg:order-1">
          {/* Subtle Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-600/20 blur-[100px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <img 
              src="/P1.webp" 
              alt="Featured Pasta" 
              className="w-full max-w-lg mx-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)]"
            />
            
            {/* Floating Price Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 md:right-10 bg-orange-600 text-white p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center border-4 border-[#0a0a0a] shadow-2xl rotate-12"
            >
              <span className="text-xs font-mono uppercase">Only</span>
              <span className="text-xl font-bold">$24</span>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: Content & Story */}
        <div className="relative z-10 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-orange-600"></span>
              <span className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase">Chef's Special Selection</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-white uppercase leading-tight mb-8">
              Smoked <br /> 
              <span className="text-transparent stroke-text italic">Truffle Craft</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Our signature dish is a masterpiece of textures. Handmade fettuccine tossed in a 
              24-month aged Parmesan wheel, infused with aromatic black truffles from the 
              Piedmont region and topped with edible gold leaf.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Fresh Ingredients</h4>
                <p className="text-gray-500 text-xs">Sourced daily from local organic farms.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Authentic Recipe</h4>
                <p className="text-gray-500 text-xs">A 100-year-old family secret from Naples.</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group flex items-center gap-4 text-white uppercase font-bold tracking-[0.2em] text-sm overflow-hidden">
              <span className="bg-orange-600 w-12 h-12 flex items-center justify-center rounded-full group-hover:w-full group-hover:px-6 transition-all duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="group-hover:opacity-0 transition-opacity">Discover The Story</span>
            </button>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
      `}</style>
    </section>
  );
}