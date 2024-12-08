import Footer from "@/app/component/footer";
import Image from "next/image";
import one from "@/app/images/one.png";
import two from "@/app/images/two.png";
import three from "@/app/images/three.png";
import four from "@/app/images/four.png";
import five from "@/app/images/five.png";
import six from "@/app/images/six.png";
const subscription = () => {
    return (
        <div className="bg-gray-100">
            <div className="">
            <div className="text-center mt-10 pt-10"><h1 className="font-bold text-3xl">Or Subscription To The Newsletter</h1></div>
            <div className="text-center mt-20"><input type="Email Address" placeholder="Email Address" className="border-b-4 w-80 text-black py-2 pl-10 underline decoration-gray-900"/><button className="bg-gray-500 w-14 h-10 rounded hover:bg-[#029FAE]">Submit</button></div>
            </div>
            <div className="text-center mt-10"><h1 className="font-bold text-3xl">Follow Products And Discounts On Instagram</h1></div>
            <div className="mt-10">
                <ul className="flex justify-around">
                    <li><Image src={one} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={two} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={three} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={four} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={five} alt="" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={six} alt="" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div><Footer/></div>
        </div>
    )
} 
export default subscription;