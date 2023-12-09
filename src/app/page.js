import Image from "next/image";
import Link from "next/link";

function Testimoni(props) {
  return (
    <>
      <div className="flex flex-row gap-2 md:col-span-2 sm:col-span-3 col-span-6 items-center border-2 p-3 border-slate-400 rounded-lg shadow-xl">
        <Image src={props.image} alt="client" width={70} height={0} />
        <div className="flex flex-col">
          <p className="md:text-base sm:text-[15px] text-[13px] font-bold text-sky-900">
            {props.name}
          </p>
          <p className="md:text-sm sm:text-[13px] text-[12px]">
            "{props.testimoni}"
          </p>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="w-full h-[24rem] relative flex">
        <Image src="/Page1.jpg" className="object-cover" fill />
        <p
          className="absolute text-white font-bold inset-y-32
        md:text-4xl md:left-[20rem] 
        sm:text-2xl sm:left-[10rem] 
        text-lg left-[5rem]"
        >
          WELCOME TO ARKADIA WORKS
        </p>
        <p
          className="absolute text-white font-bold top-[12rem]
        md:text-xl  md:left-[32rem] 
        sm:text-base sm:left-[16rem]
        text-sm left-[8rem]"
        >
          Your Vision, Our Expertise:
        </p>
        <p
          className="absolute text-white font-bold  top-[14rem] 
        md:text-xl md:left-[36rem] 
        sm:text-base sm:left-[18rem]
        text-sm left-[3rem]"
        >
          Crafting Exceptional Interiors, One Space at a Time.
        </p>
      </div>

      <div className="relative mt-9 mb-1 flex m-auto px-2">
        <div className="container max-w-5xl bg-slate-200 m-auto text-justify mb-0 pb-0">
          <div className="max-w-3xl m-auto mt-5">
            <p className="md:text-3xl sm:text-xl text-base text-sky-950 font-bold text-center p-auto">
              CREATING ARCHITECTURAL SYMPHONIES ACROSS INDONESIA{" "}
            </p>
            <p className="md:text-base sm:text-xs text-xs font-bold text-slate-900 mt-2 p-auto">
              "Transforming tradition into innovation, redefining the
              architectural horizon in Indonesia. We blend modernity with
              cultural richness, crafting spaces that stand as timeless
              reflections of our commitment to excellence."
            </p>

            <div className="w-full md:h-[30rem] sm:h-[26rem] h-[24rem] relative flex mb-3">
              <Image src="/Page2.jpg" className="object-cover" fill />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 opacity-80 p-5">
                <h1 className="md:text-lg sm:text-base text-sm text-center font-bold md:pb-3 sm:pb-2 pb-1">
                  Architecture in Context
                </h1>
                <p className="md:text-[16px] sm:text-[14px] text-[12px] ">
                  Founded in 2016, Arkadia stands as a prominent architectural
                  firm, drawing inspiration from the rich cultural tapestry and
                  diverse landscapes of Indonesia. As a leading exponent of
                  architectural design, we are dedicated to creating structures
                  that seamlessly integrate with the unique physical and
                  cultural context of Indonesia.
                </p>
                <Link href="/about">
                  <button className="font-bold text-left w-20 pt-1 md:text-lg sm:text-base text-sm hover:text-sky-700">
                    More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl m-auto px-2 text-justify">
        <p
          className="text-center font-bold text-sky-900
        md:text-3xl md:pt-10 md:pb-5 
        sm:text-xl sm:pt-5 sm:pb-3
        text-base pt-3 pb-1 "
        >
          WHAT DO WE OFFER?
        </p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mb-10 p-auto relative">
          <Image
            src="/Page3.jpg"
            width={600}
            height={600}
            className="mt-5 object-cover m-auto"
          />
          <div className="m-auto pl-5 pr-5 text-justify">
            <p className="md:text-[16px] sm:text-[14px] text-[12px] text-sky-900 pt-2">
              Immerse yourself in bespoke design solutions with our
              architectural and interior design services, where innovation meets
              functionality. From visionary architectural concepts to
              personalized interior designs, we offer a holistic approach to
              transforming spaces. Our expert team ensures a seamless journey,
              providing unique solutions that resonate with your vision and
              elevate your environment.
            </p>
            <Link href="/services">
              <button className="font-bold text-left text-sky-900 mt-1 md:text-lg sm:text-base text-sm hover:text-sky-600">
                More...
              </button>{" "}
            </Link>
          </div>
        </div>
        <Link href="/services">
          <div className="container grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 m-auto p-auto ">
            <div className="box-content w-48 p-4 bg-slate-100 hover:bg-slate-200 flex flex-col items-center m-auto">
              <p className="md:text-lg sm:text-base text-sm font-bold text-center text-sky-950 pb-5">
                MASTER PLANNING
              </p>
              <Image src="/plan.png" alt="logo" width={70} height={0} />
            </div>
            <div className="box-content w-48 p-4 bg-slate-200 hover:bg-slate-300 flex flex-col items-center m-auto">
              <p className="md:text-lg sm:text-base text-sm  font-bold text-center text-sky-950 pb-5">
                RENOVATION
              </p>
              <Image src="/renovation.png" alt="logo" width={70} height={0} />
            </div>
            <div className="box-content w-48 p-4 bg-slate-300 hover:bg-slate-400 flex flex-col items-center m-auto">
              <p className="md:text-lg sm:text-base text-sm  font-bold text-center text-sky-950 pb-5">
                INTERIOR DESIGN
              </p>
              <Image src="/interior.png" alt="logo" width={70} height={0} />
            </div>
            <div className="box-content w-48 p-4 bg-slate-400 hover:bg-slate-500 flex flex-col items-center m-auto">
              <p className="md:text-lg sm:text-base text-sm  font-bold text-center text-sky-950 pb-5">
                URBAN DESIGN
              </p>
              <Image src="/urban.png" alt="logo" width={70} height={0} />
            </div>
            <div className="box-content w-48 p-4 bg-slate-500 hover:bg-slate-600 flex flex-col items-center m-auto">
              <p className="md:text-lg sm:text-base text-sm  font-bold text-center text-sky-950  pb-5">
                LANDSCAPE DESIGN
              </p>
              <Image src="/park.png" alt="logo" width={70} height={0} />
            </div>
          </div>
        </Link>

        <div className="container w-full m-auto text-justify bg-gray-100 mt-10 pb-10">
          <p className="md:text-3xl sm:text-xl text-base text-left font-bold pt-10 pb-5 text-sky-900 p-10">
            WHAT DID THEY SAY ABOUT US?
          </p>
          <div className="grid grid-cols-6 m-auto justify-items-center items-center max-w-5xl gap-10 mx-14">
            <Testimoni
              image="/clientA.jpg"
              name="David M."
              testimoni="Incredible architectural prowess—our space now feels like a personalized masterpiece."
            />
            <Testimoni
              image="/clientB.jpg"
              name="Emma L."
              testimoni="Custom home design captured our unique style flawlessly, a truly remarkable experience."
            />
            <Testimoni
              image="/clientC.jpg"
              name="Alex R."
              testimoni="Landscape architecture project showcased an astounding attention to detail and natural integration."
            />
            <Testimoni
              image="/clientD.jpg"
              name="Sarah K."
              testimoni="Interior design brilliance; the before-and-after images tell the story of a transformative space."
            />
            <Testimoni
              image="/clientE.jpg"
              name="Evan G."
              testimoni="Custom home design that not only met but also understood our lifestyle and aspirations."
            />
            <Testimoni
              image="/clientF.jpg"
              name="Liam W."
              testimoni="Their personalized approach brought my dream home to life, surpassing all expectations."
            />
          </div>
        </div>
      </div>
    </>
  );
}
