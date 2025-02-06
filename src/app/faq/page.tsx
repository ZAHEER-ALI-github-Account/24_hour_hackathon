import Image from "next/image";
import q1 from "@/app/images/q1.png";
import q2 from "@/app/images/q2.png";
import q3 from "@/app/images/q3.png";
import q4 from "@/app/images/q4.png";
import q5 from "@/app/images/q5.png";
import q6 from "@/app/images/q6.png";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const faq = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            
            {/* Title & Description */}
            <div className="text-center mt-16 mb-12">
            <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
            Frequently <span className="text-orange-500">Asked Questions</span>
            </h1>
                <p className="mt-4 text-lg text-gray-600 px-5 max-w-2xl mx-auto">Here are some frequently asked questions by our customers. If you have any more questions, feel free to contact us.</p>
            </div>
            
            {/* FAQ Images */}
            <div className="flex flex-col md:flex-row justify-center gap-8 mx-5 md:mx-20">
                {/* Left Column */}
                <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                        <Image src={q1} alt="FAQ Image 1" className="w-full h-auto object-contain rounded-lg transform hover:scale-105 duration-150" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                        <Image src={q2} alt="FAQ Image 2" className="w-full h-auto object-contain rounded-lg transform hover:scale-105 duration-150" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                        <Image src={q3} alt="FAQ Image 3" className="w-full h-auto object-contain rounded-lg transform hover:scale-105 duration-150" />
                    </div>
                </div>
                
                {/* Right Column */}
                <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                        <Image src={q4} alt="FAQ Image 4" className="w-full h-auto object-contain rounded-lg transform hover:scale-105 duration-150" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                        <Image src={q5} alt="FAQ Image 5" className="w-full h-auto object-contain rounded-lg transform hover:scale-105 duration-150" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                        <Image src={q6} alt="FAQ Image 6" className="w-full h-auto object-contain rounded-lg transform hover:scale-105 duration-150" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default faq;
