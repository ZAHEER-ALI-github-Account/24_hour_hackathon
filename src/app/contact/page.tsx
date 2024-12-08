import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Image from "next/image";
import about from "@/app/images/about.png";
import wish from "@/app/images/wish.png";
const contact = () => {
    return (
        <div>
            <Navbar/>
            <div className="mt-10 text-center"><h1 className="font-bold text-3xl">Get In Touch With Us</h1><p className="text-gray-600">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
            <div className="flex">
            <div className="hidden md:block mt-10 ml-72">
                <Image src={about} alt="" className="w-[300px]"/>
            </div>
            <div className="mt-10 md:ml-32">
                <h1 className="font-semibold">Your name</h1>
                <input type="Email Address" placeholder="Abc" className="border-b-4 w-80 text-black py-2 pl-10 underline decoration-gray-900 mt-10"/>
                <h1 className="font-semibold mt-10">Email address</h1>
                <input type="Email Address" placeholder="Abc@def.com" className="border-b-4 w-80 text-black py-2 pl-10 underline decoration-gray-900 mt-10"/>
                <h1 className="font-semibold mt-10">Subject</h1>
                <input type="Email Address" placeholder="This is an optional" className="border-b-4 w-80 text-black py-2 pl-10 underline decoration-gray-900 mt-10"/>
                <h1 className="font-semibold mt-10">Message</h1>
                <input type="Email Address" placeholder="Hi I'd like to ask about" className="border-b-4 w-80 text-black py-2 pl-10 underline decoration-gray-900 mt-10"/><br />
                <button className="w-14 h-10 rounded bg-[#029FAE] mt-10">Submit</button>
            </div>
            </div>
            <div className="mt-10"><Image src={wish} alt="" className=""/></div>
            <Footer/>
        </div>
    )
}
export default contact;