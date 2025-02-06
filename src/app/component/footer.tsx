import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import logoicon from "@/app/images/logoicon.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3">
              <Image src={logoicon} alt="Logo" width={40} height={40} />
              <p className="text-2xl font-bold text-gray-900">Comforty</p>
            </div>
            <p className="text-gray-600 mt-4">
              Discover comfort and style with our latest furniture collections. 
              Designed for modern living spaces.
            </p>
            <div className="flex gap-4 mt-4 text-xl">
              <i className="ri-facebook-circle-fill text-gray-600 hover:text-blue-600 transition duration-200 cursor-pointer"></i>
              <i className="ri-twitter-fill text-gray-600 hover:text-blue-400 transition duration-200 cursor-pointer"></i>
              <i className="ri-instagram-line text-gray-600 hover:text-pink-500 transition duration-200 cursor-pointer"></i>
              <i className="ri-pinterest-fill text-gray-600 hover:text-red-500 transition duration-200 cursor-pointer"></i>
              <i className="ri-youtube-fill text-gray-600 hover:text-red-600 transition duration-200 cursor-pointer"></i>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gray-700 font-semibold text-lg mb-3">Category</h3>
            <ul className="space-y-2 text-gray-600">
              {["Sofa", "Arm Chair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
                <li key={item} className="hover:text-green-800 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-700 font-semibold text-lg mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600">
              {["Help & Support", "Terms & Conditions", "Privacy Policy", "FAQ"].map((item) => (
                <li key={item} className="hover:text-green-800 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-700 font-semibold text-lg mb-3">Subscribe</h3>
            <p className="text-gray-600 mb-3">Get the latest updates & offers.</p>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-r-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Comforty. Designed & Developed by Zakirsoft.
        </div>
      </div>
    </footer>
  );
}
