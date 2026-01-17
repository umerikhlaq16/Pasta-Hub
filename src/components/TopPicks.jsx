import { motion } from "framer-motion";

const topPicks = [
  { id: "01", name: "Truffle Tagliatelle", price: "28", tag: "Chef's Choice", img: "/P1.png", desc: "Hand-shaved Umbrian truffles with aged pecorino." },
  { id: "02", name: "Midnight Penne", price: "24", tag: "Limited", img: "/P3.png", desc: "Squid ink pasta with roasted garlic and chili oil." },
  { id: "03", name: "Golden Carbonara", price: "26", tag: "Must Try", img: "/P2.png", desc: "Smoked guanciale and organic duck egg yolk." },
];

export default function TopPicks() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Subtle Text */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black leading-none uppercase">Top Picks</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-orange-600 font-mono text-xs uppercase tracking-[0.5em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange-600"></span> / Exclusive Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              WEEKLY <span className="text-transparent stroke-text italic">TOP PICKS</span>
            </h2>
          </div>
          <button className="text-white font-bold text-xs uppercase tracking-widest border-b border-orange-600 pb-2 hover:text-orange-500 transition-colors">
            View All Specials
          </button>
        </div>

        {/* Top Picks Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAIN FEATURED ITEM (Takes 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-[#0f0f0f] rounded-3xl p-8 md:p-12 relative overflow-hidden group min-h-[500px] flex flex-col justify-between border border-white/5"
          >
            <div className="relative z-20">
              <span className="bg-orange-600 text-white text-[10px] font-black uppercase px-4 py-1 tracking-tighter mb-4 inline-block">
                {topPicks[0].tag}
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-sm leading-none">
                {topPicks[0].name}
              </h3>
              <p className="text-gray-400 mt-6 max-w-xs text-sm leading-relaxed">
                {topPicks[0].desc}
              </p>
              <div className="mt-8 flex items-center gap-6">
                <span className="text-3xl font-mono font-bold text-white">${topPicks[0].price}</span>
                <button className="bg-white text-black text-[10px] font-black px-8 py-3 uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
                  Order Now
                </button>
              </div>
            </div>

            {/* Large Image Floating on Right */}
            <motion.img 
              whileHover={{ scale: 1.1, rotate: -5 }}
              src={topPicks[0].img} 
              alt={topPicks[0].name}
              className="absolute -right-10 -bottom-10 md:right-0 md:-bottom-20 w-[300px] md:w-[450px] object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.9)] z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>

          {/* SIDE LIST (Takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {topPicks.slice(1).map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-[#0f0f0f] rounded-3xl p-6 flex items-center gap-6 group border border-white/5 hover:border-orange-600/30 transition-all duration-500 overflow-hidden"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-[#0a0a0a] rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                   <motion.img 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    src={item.img} 
                    className="w-full h-full object-contain drop-shadow-2xl z-10"
                   />
                   <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest mb-1">{item.tag}</span>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-lg font-bold text-white/50 group-hover:text-white">${item.price}</span>
                    <button className="text-[10px] font-black uppercase tracking-widest text-white border-b border-white/10 group-hover:border-orange-600 transition-all">
                      Add +
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
}