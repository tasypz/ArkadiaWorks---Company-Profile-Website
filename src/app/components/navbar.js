import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" bg-white top-0 left-0 z-10">
        <div className="flex justify-between max-w-7xl items-center m-auto h-20">
          <div className="flex gap-3justify-center items-center">
            <Link href="/">
              <Image
                src="/Logo_Arkadia.jpg"
                alt="logo"
                width={120}
                height={0}
              />
            </Link>
          </div>
          <ul className="flex md:gap-20 sm:gap-10 gap-2 md:text-xl sm:text-base text-xs font-semibold text-sky-900 ">
            <Link href="/">
              <li className="hover:font-bold hover:text-slate-600">Home</li>
            </Link>
            <Link href="/about">
              <li className="hover:font-bold hover:text-slate-600">About Us</li>
            </Link>
            <Link href="/services">
              <li className="hover:font-bold hover:text-slate-600">Services</li>
            </Link>
            <Link href="/team">
              <li className="hover:font-bold hover:text-slate-600">Our Team</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
