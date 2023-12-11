import Image from "next/image";
import getData from "../fetch/getData";
import Link from "next/link";
import { Contact } from "../components/contactus";

export const metadata = {
  title: "About Us - Arkadia Works",
  description: "About Us - Arkadia Works",
};

function OurValues(props) {
  return (
    <>
      <div className="flex flex-col items-center  md:col-span-1 sm:col-span-2 col-span-4 gap-3 p-4 border-4 bg-slate-100">
        <Image
          src={props.image}
          alt={props.alter}
          width={70}
          height={0}
          className="pb-3"
        />

        <p className="md:text-base sm:text-[15px] text-[13px] font-bold text-center text-sky-950">
          {props.name}
        </p>
        <p className="md:md:text-sm sm:text-[13px] text-[12px] text-justify text-slate-900">
          {props.description}
        </p>
      </div>
    </>
  );
}

export default async function About() {
  const data = await getData();
  const clevel = data.slice(0, 3);

  const descObj = [
    {
      jobtitle: `Chief Executive Officer`,
      description: `Our CEO is the driving force behind Arkadia Works vision and strategic direction. With a wealth of experience in architecture and a keen business acumen, she leads the company towards innovation and sustainable growth. Her commitment to excellence and client satisfaction sets the standard for the entire organization.`,
    },
    {
      jobtitle: `Design Director`,
      description: `As a Design Director, he brings artistic brilliance and design expertise to Arkadia Works. Leading our creative teams, he ensures that every project reflects a perfect blend of aesthetics and functionality. His passion for creating spaces that inspire and endure is at the core of our design philosophy.`,
    },
    {
      jobtitle: `Operational Director`,
      description: `Our Operational Director oversees the day-to-day operations of Arkadia Works, ensuring efficiency and excellence in project execution. With a strategic focus on operational optimization, she plays a pivotal role in driving the company's success and maintaining high standards of service delivery.`,
    },
  ];

  return (
    <>
      <div className="container max-w-4xl m-auto px-6 pt-10">
        <div className="flex flex-col justify-center gap-2">
          <p className="md:text-4xl sm:text-2xl text-lg text-sky-950 font-bold capitalize text-justify">
            HELLO. WE TRANSFORM SPACES INTO LIVING DREAMS.
          </p>
          <p className="md:text-base sm:text-xs text-xs font-bold text-slate-900 md:mx-2 sm:mx-1 text-justify">
            "Arkadia Works team consist of young, creative, dynamic, and highly
            motivated people who are passionate of turning ideas into a creative
            design and finally materialized it into real end products."
          </p>
          <Image
            src={"/ArkadiaWorks.jpg"}
            alt="ArkadiaTeam"
            width={800}
            height={0}
            className="self-center text-center items-center origin-center object-center"
          />
          <div className="bg-slate-200 md:px-10 sm:px-5 px-3 md:pb-10 sm:pb-5 pb-3 rounded-3xl">
            <div className="container flex flex-col max-w-xl mt-5">
              <p className="md:text-2xl sm:text-lg text-sm font-bold text-sky-900 mb-2">
                Our History
              </p>
              <p className="text-justify md:text-base sm:text-sm text-xs font-thin text-black ">
                Founded in 2016, Arkadia Works emerged with a visionary goal to
                reshape the architectural narrative of Indonesia. From the
                outset, our mission has been to seamlessly blend modern design
                principles with the rich cultural tapestry that defines our
                nation. As we celebrate our history, each passing year marks a
                commitment to innovative designs, transformative projects, and a
                legacy that stands as a testament to our dedication to
                excellence.
                <br />
                <br />
                In just a few years, Arkadia Works has become synonymous with
                responsiveness to Indonesia's diverse physical and cultural
                contexts. Our journey is punctuated by milestones, from
                groundbreaking projects that redefine urban spaces to
                initiatives promoting sustainable and culturally resonant
                designs. Today, Arkadia Works stands as a beacon of
                architectural excellence, weaving a legacy that harmonizes
                tradition and modernity in every structure we craft.
              </p>
            </div>
            <div className="container flex flex-col ml-auto max-w-xl mt-10 text-right">
              <p className="md:text-2xl sm:text-lg text-sm font-bold  text-sky-900 mb-2">
                Our Culture
              </p>
              <p className="text-justify md:text-base sm:text-sm text-xs font-thin text-black ">
                At Arkadia Works, our culture is a vibrant tapestry woven with
                innovation, collaboration, and a deep respect for cultural
                heritage. We pride ourselves on fostering an environment where
                creativity thrives, viewing challenges as opportunities for
                imaginative solutions. Our team is a diverse collective of
                creative minds, each contributing to a collaborative spirit that
                defines our workspace.
                <br /> <br />
                In embracing our commitment to cultural richness, Arkadia Works
                stands at the intersection of tradition and modernity. We honor
                and seamlessly integrate traditional elements into our
                cutting-edge designs, ensuring that every project reflects a
                harmonious blend of the past and the present. At Arkadia Works,
                our culture is not only a reflection of our values but a dynamic
                force that propels us toward architectural excellence. Join us
                in this journey where passion, creativity, and respect for
                tradition converge to shape the future of design.
              </p>
            </div>
          </div>
        </div>

        <div className="container m-auto py-10">
          <p className="md:text-3xl sm:text-2xl text-lg text-center text-sky-900 font-bold md:pb-4 sm:pb-2 pb-1">
            PEOPLE BEHIND ARKADIA WORKS
          </p>
          <p className="md:text-lg sm:text-base text-sm text-center text-sky-950 font-semibold md:pb-4 sm:pb-2 pb-1">
            Meet the brilliant minds shaping the essence of Arkadia Works. Our
            diverse team of architects, designers, and innovative thinkers is
            united by a shared passion for redefining spaces. With creativity at
            the core, these individuals bring expertise and vision to every
            project, creating environments that transcend expectations. Explore
            the unique stories and talents of the people behind Arkadia Works,
            where each individual contributes to our collective pursuit of
            architectural excellence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 py-3 mb-2 max-w-3xl text-center content-center m-auto gap-5">
        {clevel.map((teams, i) => {
          return (
            <>
              <div
                className="flex flex-col justify-center items-center ml-5 "
                key={teams.id.value}
              >
                <Image
                  src={teams.picture.large}
                  width={175}
                  height={0}
                  quality={100}
                  className="rounded-full"
                  alt="clevel"
                />
              </div>
              <div className="flex flex-col justify-center items-center mx-5 ">
                <p className="md:text-lg sm:text-sm text-sm font-bold text-sky-950">
                  {descObj[i].jobtitle}
                </p>
                <p className="md:text-[16px] sm:text-[14px] text-[12px] font-semibold text-sky-950">
                  {teams.name.first} {teams.name.last}
                </p>
                <p className="md:text-[16px] sm:text-[14px] text-[12px] font-thin text-black">
                  {descObj[i].description}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <div className="container md:max-w-6xl m-auto text-justify mb-3 px-2">
        <p className="md:text-3xl sm:text-2xl text-base text-center pt-16n font-bold pt-10 pb-5 text-sky-900">
          WHY US?
        </p>
        <div className="grid grid-cols-4 gap-4 mx-14">
          <OurValues
            image="/creativity.png"
            alter="creativity"
            name="Innovative Design"
            description="We redefine spaces with innovative and trend-setting designs that
              reflect your unique style."
          />
          <OurValues
            image="/team.png"
            alter="teamwork"
            name="Experienced Team"
            description="Our team of seasoned designers and architects brings years of
            expertise, ensuring every project is executed with precision and
            flair."
          />
          <OurValues
            image="/good-quality.png"
            alter="goodquality"
            name="Quality Craftsmanship"
            description="We believe in delivering not just designs but also ensuring that
            your space remains timeless and functional."
          />
          <OurValues
            image="/sustainable.png"
            alter="sustainable"
            name="Sustainable Design Practices"
            description="By integrating eco-friendly practices, employing energy-efficient solutions and environmentally conscious materials in every project. "
          />
        </div>
      </div>

      <Contact />
    </>
  );
}
