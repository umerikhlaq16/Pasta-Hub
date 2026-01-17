import { motion } from "framer-motion";

const stats = [
  { label: "Years of Heritage", value: "15+" },
  { label: "Handmade Pasta Shapes", value: "24" },
  { label: "Michelin Recognition", value: "02" },
  { label: "Local Farm Partners", value: "10" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/*  HERO SECTION (The Vision)  */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-orange-600 font-mono text-xs uppercase tracking-[0.5em] block">/ Our Legacy</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              BORN IN <br /> 
              <span className="text-transparent stroke-text italic">FLORENCE</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              PastaHub wasn’t built in a day. It was built over generations of flour-dusted hands, 
              secret family ragùs, and a relentless obsession with the perfect "al dente" bite.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#111] rounded-3xl overflow-hidden relative z-10">
              <img 
                src="/chef.jpg" 
                alt="Our Roots" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-orange-600 p-8 rounded-2xl z-20 hidden md:block">
              <p className="text-white font-black text-4xl uppercase tracking-tighter italic">EST. 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  STATS SECTION  */}
      <section className="bg-[#0f0f0f] py-20 px-6 md:px-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-black text-orange-600 mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CRAFT (Asymmetric Section)*/}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3 space-y-8 sticky top-32 h-fit">
            <h2 className="text-4xl font-black uppercase tracking-tighter">The Secret <br /> <span className="text-orange-600">is in the Process</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We source our flour from the hills of Tuscany and our eggs from local organic farms. 
              No machines, no shortcuts—just patience and passion.
            </p>
            <div className="w-20 h-[1px] bg-orange-600"></div>
          </div>

          <div className="lg:w-2/3 space-y-24">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2 aspect-video bg-[#111] overflow-hidden rounded-2xl">
                <img src="/Hand.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Hand Rolling" />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-orange-600 font-bold text-4xl italic opacity-20">01.</span>
                <h4 className="text-xl font-bold uppercase mb-4">Hand-Rolled Dough</h4>
                <p className="text-gray-500 text-sm">Every strand of pasta is hand-cut by our artisans to ensure the perfect texture for holding our rich sauces.</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
            >
              <div className="w-full md:w-1/2 aspect-video bg-[#111] overflow-hidden rounded-2xl">
                <img src="/Sauce.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Sourcing" />
              </div>
              <div className="w-full md:w-1/2 text-right md:text-left">
                <span className="text-orange-600 font-bold text-4xl italic opacity-20">02.</span>
                <h4 className="text-xl font-bold uppercase mb-4">Slow-Simmered Sauces</h4>
                <p className="text-gray-500 text-sm">Our ragùs simmer for over 12 hours, extracting every ounce of flavor from San Marzano tomatoes and premium herbs.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* QUOTE SECTION  */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-center px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-5xl text-orange-600 italic">"</span>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tight leading-tight">
            Pasta is the canvas, and fresh ingredients are the colors. We don't just cook; we paint.
          </h2>
          <p className="mt-8 text-orange-600 font-mono text-xs uppercase tracking-[0.3em]">— Chef Marco Rossi</p>
        </motion.div>
      </section>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}