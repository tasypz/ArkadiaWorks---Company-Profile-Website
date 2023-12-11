import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className=" bg-sky-950 bottom-0 m-auto md:pl-5 md:pr-5 sm:pl-3 sm:pr-3 pl-1 pr-1">
        <div className="flex justify-between items-center m-auto p-auto mb-2">
          <p className="md:text-[14px] sm:text-[12px] text-[8px] font text-white mt-5">
            PT ARKADIA SINERGI INDONESIA <br />
            PONDOK INDAH OFFICE TOWER 2 <br />
            15TH FLOOR <br />
            JL. SULTAN ISKANDAR MUDA KAV. V-TA <br />
            PONDOK INDAH JAKARTA,
            <br />
            12310, INDONESIA <br />
            <br />
            TEL: +62 8111476793, FAX: +62 21 7433946
          </p>
          <ul className="flex flex-col gap-2 text-center md:text-[18px] sm:text-[14px] text-[11px] font-semibold text-white">
  <li className="hover:font-bold hover:text-slate-400"><Link href="/">Home</Link></li>
  <li className="hover:font-bold hover:text-slate-400"><Link href="/about">About Us</Link></li>
  <li className="hover:font-bold hover:text-slate-400"><Link href="/services">Services</Link></li>
  <li className="hover:font-bold hover:text-slate-400"><Link href="/team">Our Team</Link></li>
</ul>
          <div className="flex flex-col text-center">
            <p className="md:text-[18px] sm:text-[14px] text-[12px] font-bold text-white mt-5 mb-2">
              CONTACT US!
            </p>
            <input
              type="email"
              placeholder="Input your email here"
              className="p-1 border-slate-400 rounded-lg text-center m-auto mb-2 md:w-150 sm:w-50 w-30 md:text-[16px] sm:text-[13px] text-[10px]"
            ></input>
            <button className="bg-sky-700 hover:bg-sky-100 text-sky-100 hover:text-sky-700 rounded-lg text-center md:w-20 sm:w-16 w-10 m-auto md:text-[18px] sm:text-[14px] text-[10px] p-1 mt-1">
              Send
            </button>
          </div>
        </div>
        <p className="md:text-[16px] sm:text-[14px] text-[10px] font-thin text-white m-auto text-center mb-3">
          Copyright © 2023 Arkadia Works. All Rights Reserved
        </p>
      </div>
    </>
  );
}
