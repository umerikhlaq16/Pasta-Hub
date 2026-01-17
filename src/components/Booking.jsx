import { motion } from "framer-motion";

export default function ReservationSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-orange-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: TEXT & INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-orange-600 font-mono text-xs uppercase tracking-[0.5em] block">
              / Reservations
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              SECURE YOUR <br /> 
              <span className="text-transparent stroke-text italic">EXPERIENCE</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed pt-4">
              Join us for an unforgettable culinary journey. Whether it's a private dinner or a festive celebration, we'll prepare the perfect table for you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Location</h4>
              <p className="text-gray-500 text-sm">123 Artisan Ave, <br /> Food District, NY</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Hours</h4>
              <p className="text-gray-500 text-sm">Mon - Sun: 12PM - 11PM</p>
            </div>
          </div>
        </motion.div>

        {/*  BOOKING FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0f0f0f] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative group"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/5 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />

          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-orange-600 transition-colors placeholder:text-gray-800"
                />
              </div>
              {/* Guests Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Guests</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-orange-600 transition-colors appearance-none">
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6+ People</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-orange-600 transition-colors"
                />
              </div>
              {/* Time Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Time</label>
                <input 
                  type="time" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-orange-600 transition-colors"
                />
              </div>
            </div>

            {/* Message / Requests */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Special Requests</label>
              <textarea 
                rows="3"
                placeholder="Any allergies or special occasions?"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-orange-600 transition-colors placeholder:text-gray-800 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-orange-600 hover:bg-white hover:text-black text-white font-black py-5 rounded-xl uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-lg shadow-orange-600/20">
              Confirm Reservation
            </button>
          </form>
        </motion.div>

      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}