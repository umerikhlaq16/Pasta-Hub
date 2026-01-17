import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Large Text  */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[25vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap">
          PASTA HUB
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: BRANDING & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-500">
                <span className="text-white font-black text-lg -rotate-45 group-hover:-rotate-180 transition-transform duration-500">P</span>
              </div>
              <div className="text-xl font-black tracking-tighter text-white uppercase italic">
                Pasta<span className="text-orange-600">Hub</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Handcrafting moments of Italian perfection since 2026. Join us for an authentic culinary journey.
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'TW', 'LI'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-gray-500 hover:border-orange-600 hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Explore</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><Link to="/menu" className="hover:text-orange-500 transition-colors">Artisan Menu</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Reservations</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500 transition-colors">Join the Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>123 Artisan Ave,<br />New York, NY 10012</li>
              <li className="text-white">hello@pastahub.com</li>
              <li className="text-orange-500 font-bold">+1 (555) 000-2026</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-gray-500 text-sm">Subscribe for exclusive invites and new flavors.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-orange-600 transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-600 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION*/}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {currentYear} PastaHub Italian Kitchen. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-gray-600 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

      <style jsx>{`
        footer {
          background-image: radial-gradient(circle at 50% 100%, #1a1410 0%, #0a0a0a 100%);
        }
      `}</style>
    </footer>
  );
}