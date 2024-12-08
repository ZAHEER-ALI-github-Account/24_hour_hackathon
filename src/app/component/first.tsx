import Image from "next/image";
import bg from "@/app/images/BG.png";
import heroinfo from "@/app/images/heroinfo.png";
import companylogo from "@/app/images/companylogo.png";
import kursi from "@/app/images/kursi.png";
const first = () => {
    return (
        <div>
            <div>
            <Image src={bg} alt="background" className="hidden md:block w-[900px] h-[600px] md:ml-48"/>
            <Image src={heroinfo} alt="description" className="md:ml-52 w-[340px] md:mt-[-500px]"/>
            <Image src={kursi} alt="chair" className="md:hidden xs:flex h-48 w-48 ml-24"/>
            </div>
            <div className="xs:mt-20 md:mt-72">
                <Image src={companylogo} alt="companylogo"/>
            </div>
        </div>
    )
}
export default first;