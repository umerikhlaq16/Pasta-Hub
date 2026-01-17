import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        

        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 font-mono text-xs uppercase tracking-[0.5em] block mb-4"
          >
            / Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            CONTACT <span className="text-transparent stroke-text italic">US</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <form className="space-y-8">
              <div className="group relative">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-orange-600 transition-colors placeholder:text-gray-700 font-medium" />
              </div>
              <div className="group relative">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-orange-600 transition-colors placeholder:text-gray-700 font-medium" />
              </div>
              <div className="group relative">
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-orange-600 transition-colors placeholder:text-gray-700 font-medium resize-none"></textarea>
              </div>
              <button className="bg-orange-600 text-white font-black py-4 px-10 uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 rounded-sm">
                Send Message
              </button>
            </form>

 
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-[10px] font-black uppercase text-orange-600 tracking-widest mb-2">Call Us</h4>
                <p className="text-white font-bold">+1 (212) 555-0198</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-orange-600 tracking-widest mb-2">Visit Us</h4>
                <p className="text-gray-500 text-sm">199 Orchard St, New York, NY 10002</p>
              </div>
            </div>
          </motion.div>

  
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 h-[600px] rounded-3xl overflow-hidden grayscale contrast-[1.2] brightness-[0.8] border border-white/5 relative group"
          >
       
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.272740263659!2d-73.9903914!3d40.7224569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ecb924fff5%3A0x6ff750458f0423c8!2s199%20Orchard%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
      
            <div className="absolute inset-0 pointer-events-none border-[20px] border-[#0a0a0a] rounded-3xl opacity-50 group-hover:opacity-20 transition-opacity"></div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}