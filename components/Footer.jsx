import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer(){
  return(
    <main className="flex max-lg:flex-col max-lg:gap-5 items-center justify-between border-t border-gray-300 lg:px-10 max-lg:py-2 py-2">
      <div className="flex items-center gap-2">
        <Image
        src={"/logo.png"}
        alt="logo"
        width={700}
        height={700}
        className="w-6 h-6"
        />
        <p className="text 2xl text-stone-800">CareerLink</p>
      </div>
      <div className="flex items-center gap-5 text-sm max-md:flex-col">
        <Link href={"#"}> Chat with Us</Link>
        <Link href={"#"}> Terms of Service</Link>
        <Link href={"#"}> Privacy Policy</Link>
      </div>
      <div className="flex items-center gap-5 text-2xl text-gray-700">
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
      </div>
    </main>
  )
}