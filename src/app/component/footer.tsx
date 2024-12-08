import Image from "next/image";
import Footer from "@/app/images/Footer.png";
const footer = () => {
    return (
        <div>
            <div className="mt-10">
            <Image src={Footer} alt="footer"/>
            </div>
        </div>
    )
}
export default footer;