import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" bg-white top-0 left-0 z-10">
        <div className="flex justify-between max-w-7xl items-center m-auto h-16">
          <div className="flex gap-3justify-center items-center">
            <Link href="/">
              <Image
                src="/Logo_Arkadia.jpg"
                alt="logo"
                width={140}
                height={0}
              />
            </Link>
          </div>
          <ul className="flex md:gap-20 sm:gap-10 gap-2 md:text-xl sm:text-base text-xs font-semibold text-sky-900">
  <li className="hover:font-bold hover:text-slate-600"><Link href="/">Home</Link></li>
  <li className="hover:font-bold hover:text-slate-600"><Link href="/about">About Us</Link></li>
  <li className="hover:font-bold hover:text-slate-600"><Link href="/services">Services</Link></li>
  <li className="hover:font-bold hover:text-slate-600"><Link href="/team">Our Team</Link></li>
</ul>
        </div>
      </div>
    </>
  );
}
