import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Truffle Tagliatelle", price: "24", tag: "Signature", img: "/P1.webp", offset: "lg:mt-0" },
  { id: 2, name: "Midnight Penne", price: "19", tag: "Spicy", img: "/hero.webp", offset: "lg:mt-24" },
  { id: 3, name: "Burrata Ravioli", price: "22", tag: "Classic", img: "/P2.webp", offset: "lg:-mt-12" },
  { id: 4, name: "Smoked Carbonara", price: "21", tag: "Popular", img: "/P3.webp", offset: "lg:mt-12" },
];

export default function DecentProductGrid() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-500 font-mono text-xs uppercase tracking-[0.5em] mb-4">Artisan Menu</h2>
            <h3 className="text-5xl md:text-6xl font-light text-white uppercase tracking-tight">
              Pure <span className="font-black italic">Ingredients.</span> <br /> 
              Bold <span className="text-transparent stroke-text font-black">Simplicity.</span>
            </h3>
          </motion.div>
        </div>

        {/*  Asymmetric Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-0">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group ${product.offset}`}
            >
              {/* Product Frame */}
              <div className="relative overflow-hidden bg-[#0f0f0f] aspect-square flex items-center justify-center group-hover:bg-[#141414] transition-colors duration-700">
                
                {/* Subtle Price Tag */}
                <div className="absolute top-6 right-6 z-20 overflow-hidden">
                  <motion.span className="block text-white/40 font-mono text-sm group-hover:text-orange-500 transition-colors duration-500">
                    ${product.price}.00
                  </motion.span>
                </div>

                {/* Main Image */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  src={product.img}
                  alt={product.name}
                  className="w-3/4 h-3/4 object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)] z-10"
                />

                {/* Floating "Add" Button - Minimalist */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                   <button className="bg-orange-600 text-white text-[10px] font-bold uppercase py-3 px-8 tracking-widest shadow-2xl hover:bg-white hover:text-black transition-all">
                     View Details
                   </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-8 space-y-1">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-orange-600" />
                  <span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest">{product.tag}</span>
                </div>
                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-gray-500 text-sm max-w-[280px] font-medium leading-relaxed">
                  Crafted daily using premium imported flour and organic farm-fresh eggs.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
}