import Image from "next/image";
import Link from "next/link";

export function Contact() {
  return (
    <>
      <div className="w-full md:h-[24rem] sm:h-[20rem] h-[16rem] relative flex mb-3 mt-5">
        <Image src="/Page5.jpg" className="object-cover" alt="contact" fill />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="md:text-3xl sm:text-2xl text-base text-center pt-16n font-bold pt-10 pb-5 text-white">
            WHAT ARE YOU WAITING FOR?
          </p>
          <p className="md:text-lg sm:text-base text-sm text-center text-slate-100 font-semibold md:pb-4 sm:pb-2 pb-1">
            Embark on a transformative journey with Arkadia Works and redefine
            the essence of architectural excellence today.
          </p>
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHDhvgwJtQRfTsGfnbVDdrGjZnmFDGGDCWSpJtVfWBLsCFBbdTWDwRwVJbwkSSffWnJQB">
            <button
              className="bg-sky-700 hover:bg-slate-200 text-slate-200 hover:text-sky-700 rounded-2xl text-center m-auto  flex justify-center
            md:text-2xl sm:text-lg text-sm
            md:p-5 sm:p-2 p-2"
            >
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
