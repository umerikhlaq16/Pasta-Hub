import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { id: "01", name: "Truffle Tagliatelle", category: "Signature", price: "24", img: "/P1.png", detail: "Fresh black truffle, aged parmesan, porcini butter." },
  { id: "02", name: "Midnight Penne", category: "Spicy", price: "19", img: "/hero.png", detail: "Squid ink pasta, chili flakes, roasted garlic oil." },
  { id: "03", name: "Burrata Ravioli", category: "Classic", price: "22", img: "/P2.png", detail: "Soft burrata heart, heirloom tomato coulis, basil oil." },
  { id: "04", name: "Smoked Carbonara", category: "Popular", price: "21", img: "/P3.png", detail: "Guanciale, pecorino romano, smoked egg yolk." },
];

export default function NeoNoirMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 md:py-20 px-4 md:px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* LEFT SIDE: THE LIST */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-12 text-center lg:text-left"
          >
            <h2 className="text-orange-500 font-mono tracking-tighter text-xs md:text-sm mb-2">/ SELECTED DISHES</h2>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter">
              PASTA <br /> <span className="text-transparent stroke-text">CRAFT</span>
            </h1>
          </motion.div>

          <div className="space-y-0 w-full">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                // Click support for Mobile touch
                onClick={() => setHoveredIndex(index)}
                className="group relative border-b border-white/10 py-6 md:py-8 cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-baseline gap-3 md:gap-6 z-10">
                  <span className={`text-xs md:text-sm font-mono transition-opacity ${hoveredIndex === index ? "text-orange-500 opacity-100" : "text-gray-600 opacity-50 group-hover:opacity-100"}`}>
                    {item.id}
                  </span>
                  <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold uppercase transition-all duration-300 ${hoveredIndex === index ? "translate-x-2 md:translate-x-4 text-orange-500" : "group-hover:translate-x-4 group-hover:text-orange-500"}`}>
                    {item.name}
                  </h3>
                </div>
                
                <div className="text-right z-10">
                  <p className={`text-lg md:text-2xl font-mono transition-colors ${hoveredIndex === index ? "text-white" : "text-white/30 group-hover:text-white"}`}>
                    ${item.price}
                  </p>
                  <p className={`text-[8px] md:text-[10px] uppercase tracking-widest text-orange-500 transition-all ${hoveredIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    {item.category}
                  </p>
                </div>

                {/* Background Hover Effect */}
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-white/5 -z-1"
                    layoutId="hoverBg"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: THE PREVIEW (Dynamic) */}
        {/* Visible on Mobile but with adjusted height */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2 h-[350px] md:h-[500px] lg:h-[600px]">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Background Decorative Number - Scaled for Mobile */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <motion.span 
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[12rem] md:text-[15rem] lg:text-[20rem] font-black text-white/[0.03] select-none"
              >
                {menuItems[hoveredIndex].id}
              </motion.span>
            </div>

            {/* Dynamic Image Container */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
              {menuItems.map((item, index) => (
                <div key={item.id} className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.7,
                      rotate: hoveredIndex === index ? 0 : -15,
                      y: hoveredIndex === index ? 0 : 40,
                      filter: hoveredIndex === index ? "blur(0px)" : "blur(10px)"
                    }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className={`flex flex-col items-center ${hoveredIndex === index ? "pointer-events-auto" : "pointer-events-none"}`}
                  >
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_20px_60px_rgba(255,165,0,0.4)]" 
                    />
                    
                    {/* Detailed Info Below Image */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, y: 0 }}
                      className="mt-6 md:mt-12 text-center px-4"
                    >
                      <span className="text-orange-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">Description</span>
                      <p className="text-gray-400 text-xs md:text-sm italic max-w-[250px] md:max-w-xs mx-auto mt-2 leading-relaxed">
                        "{item.detail}"
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        @media (max-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.2);
          }
        }
        .group:hover .stroke-text {
          -webkit-text-stroke: 1px rgba(255,165,0,0.8);
        }
      `}</style>
    </div>
  );
}