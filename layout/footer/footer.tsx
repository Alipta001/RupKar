import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 lg:px-10">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* About EcoMarket */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center font-black text-white">E</div>
            <span className="text-2xl font-black text-white">ECOMARKET</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            India's fastest growing marketplace. Connecting millions of buyers and sellers with trust, speed, and sustainability.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {['About Us', 'Sell on EcoMarket', 'Affiliate Program', 'Careers', 'Latest News'].map(link => (
              <li key={link} className="hover:text-green-500 cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-white font-bold mb-6">Help & Support</h4>
          <ul className="space-y-4 text-sm">
            {['Track Order', 'Returns & Refunds', 'Shipping Info', 'Report an Issue', 'FAQs'].map(link => (
              <li key={link} className="hover:text-green-500 cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin size={18} className="text-green-500" /> Sector V, Salt Lake, Kolkata</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-green-600" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-green-600" /> support@ecomarket.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1920px] mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500 font-medium">© 2026 EcoMarket Inc. Designed by Alipta Ghosh. All rights reserved.</p>
        <div className="flex items-center gap-6 grayscale opacity-50">
           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
        </div>
      </div>
    </footer>
  );
}