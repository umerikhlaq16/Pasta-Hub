import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const menuData = [
  { id: 1, category: "Pasta", name: "Truffle Tagliatelle", price: 24, img: "/P1.webp", desc: "Fresh ribbons with black truffle cream." },
  { id: 2, category: "Pasta", name: "Spicy Arrabbiata", price: 18, img: "/P2.webp", desc: "San Marzano tomatoes & Calabrian chili." },
  { id: 3, category: "Pizza", name: "Burrata Margherita", price: 22, img: "/P2.webp", desc: "Creamy burrata, basil, and olive oil." },
  { id: 4, category: "Sides", name: "Garlic Focaccia", price: 10, img: "/hero.webp", desc: "Wood-fired with rosemary and sea salt." },
  { id: 5, category: "Desserts", name: "Classic Tiramisu", price: 12, img: "/P1.webp", desc: "Espresso-soaked ladyfingers & mascarpone." },
  { id: 6, category: "Drinks", name: "Aperol Spritz", price: 14, img: "/P1.webp", desc: "Classic Italian summer cocktail." },
];

const categories = ["All", "Pasta", "Pizza", "Sides", "Desserts", "Drinks"];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering Logic
  const filteredMenu = menuData.filter((item) => {
    const matchesTab = activeTab === "All" || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
          >
            THE <span className="text-transparent stroke-text italic">MENU</span>
          </motion.h1>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">Handcrafted Italian Excellence</p>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-white/5 pb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${
                  activeTab === cat ? "text-orange-600" : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600" />
                )}
              </button>
            ))}
          </div>


          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-full py-3 px-6 text-white text-xs outline-none focus:border-orange-600 transition-all"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#0f0f0f] rounded-3xl p-6 border border-white/5 hover:border-orange-600/30 transition-all duration-500"
              >
     
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-[#0a0a0a] flex items-center justify-center p-8">
                   <motion.img 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    src={item.img} 
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                   />
                   <div className="absolute top-4 right-4 bg-orange-600 text-white font-black text-[10px] px-3 py-1 rounded-full">
                      ${item.price}
                   </div>
                </div>

   
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  
 
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-gray-700 text-[10px] font-mono uppercase tracking-widest">{item.category}</span>
                    <button className="bg-white/5 hover:bg-orange-600 text-white p-3 rounded-xl transition-all group-hover:px-6 flex items-center gap-2">
                       <span className="hidden group-hover:block text-[10px] font-bold uppercase tracking-widest">Add to Order</span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                       </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-gray-600 text-2xl font-bold italic uppercase">No dishes found matching your search.</h3>
          </div>
        )}

      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}