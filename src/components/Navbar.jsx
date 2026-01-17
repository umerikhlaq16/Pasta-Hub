import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  useEffect(() => {
    if (open || showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open, showModal]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || open ? "bg-[#0a0a0a]/95 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-6"
      } px-6 md:px-12`}>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/*  LOGO  */}
          <Link to="/" className="group flex items-center gap-2 z-[110]" onClick={() => setOpen(false)}>
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-500">
              <span className="text-white font-black text-xl -rotate-45 group-hover:-rotate-180 transition-transform duration-500">P</span>
            </div>
            <div className="text-2xl font-black tracking-tighter text-white uppercase italic">
              Pasta<span className="text-orange-600">Hub</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION  */}
          <ul className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </Link>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/*  ACTION BUTTON: Triggers Modal  */}
          <div className="hidden md:block">
            <button 
              onClick={() => setShowModal(true)}
              className="px-6 py-2 border border-orange-600/50 text-orange-500 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Reserve Now
            </button>
          </div>

          {/* MOBILE TOGGLE  */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-[110] relative p-2"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2 bg-orange-600" : ""}`} />
            <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2 bg-orange-600" : ""}`} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center overflow-hidden"
            >
              <ul className="text-center space-y-8 relative z-[110]">
                {["Home", "Menu", "About", "Contact"].map((item, i) => (
                  <motion.li key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
                    <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-white hover:text-orange-600 transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
                <motion.li className="pt-6">
                  <button 
                    onClick={() => { setOpen(false); setShowModal(true); }}
                    className="px-10 py-4 bg-orange-600 text-white font-bold uppercase text-xs tracking-[0.2em]"
                  >
                    Reserve A Table
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* RESERVATION MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="mb-8">
                <span className="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] block mb-2">/ Booking</span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Reserve A Table</h2>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" required className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-5 text-white outline-none focus:border-orange-600 transition-colors" />
                  <input type="number" placeholder="Guests" required className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-5 text-white outline-none focus:border-orange-600 transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" required className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-5 text-white outline-none focus:border-orange-600 transition-colors" />
                  <input type="time" required className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-5 text-white outline-none focus:border-orange-600 transition-colors" />
                </div>
                <textarea placeholder="Special Requests (Optional)" rows="3" className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-5 text-white outline-none focus:border-orange-600 transition-colors resize-none"></textarea>
                
                <button type="submit" className="w-full bg-orange-600 text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500">
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}