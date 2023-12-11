import Image from "next/image";
import { Contact } from "../components/contactus";

export const metadata = {
  title: "Services - Arkadia Works",
  description: "Services - Arkadia Works",
};

export default function Services() {
  return (
    <>
      <div className="container max-w-3xl m-auto justify-center text-center mt-10">
        <p className="md:text-2xl sm:text-xl text-lg font-light text-sky-950 ">
          <strong>Arkadia Works</strong> invites you into a realm of design
          brilliance. Whether it's crafting inspiring interiors, architectural
          wonders, or orchestrating transformative renovations, our expertise
          elevates every space, reflecting a seamless blend of innovation and
          timeless beauty.
        </p>
      </div>

      <div className="content-center max-w-5xl m-auto justify-center text-center mb-5 ">
        <div className="bg-slate-100 grid grid-cols-2 gap-4 mb-10 rounded-3xl mt-5">
          <div className="flex flex-col justify-center items-center ml-10 py-7">
            <Image
              src="/masterplan.jpg"
              width={400}
              height={0}
              full
              className="rounded-xl"
                alt="masterplan"
            />
          </div>
          <div className="flex flex-col justify-center items-center mr-5">
            <p className="md:text-2xl sm:text-xl text-base font-bold md:my-5 sm:my-3 my-1 text-sky-950">
              1. Master Planning
            </p>
            <p className="text-center md:text-base sm:text-sm text-xs font-light text-sky-950 md:mb-5 sm:mb-3 mb-2">
              "At Arkadia Works, our Master Planning service is a meticulous
              process that involves envisioning and strategizing the development
              of large-scale projects. Whether it's a new urban development, a
              campus expansion, or a community revitalization, our team works
              collaboratively to create comprehensive plans that consider
              zoning, land use, infrastructure, and sustainability. By
              integrating our architectural expertise with urban planning
              principles, we ensure that every project aligns with our client's
              vision while contributing positively to its surroundings."
            </p>
          </div>
        </div>

        <div className="bg-slate-200 grid grid-cols-2 gap-4 mb-10 rounded-3xl mt-5">
          <div className="flex flex-col justify-center items-center ml-5">
            <p className="md:text-2xl sm:text-xl text-base font-bold md:my-5 sm:my-3 my-1 text-sky-950">
              2. Renovation
            </p>
            <p className="text-center md:text-base sm:text-sm text-xs font-light text-sky-950 md:mb-5 sm:mb-3 mb-2">
              "Our Renovation service is dedicated to transforming existing
              structures into modern, functional, and aesthetically pleasing
              spaces. From residential homes to commercial buildings, we
              approach renovations with a keen understanding of both historical
              context and contemporary design. Our team excels in adaptive
              reuse, preserving the integrity of the original structure while
              introducing innovative elements that meet the evolving needs of
              our clients."
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mr-10 py-7">
            <Image
              src="/renovation.jpg"
              width={400}
              height={0}
              full
              className="rounded-xl"
                alt="renovation"
            />
          </div>
        </div>

        <div className="bg-slate-300 grid grid-cols-2 gap-4 mb-10 rounded-3xl mt-5">
          <div className="flex flex-col justify-center items-center ml-10 py-7">
            <Image
              src="/interiordesign.jpg"
              width={400}
              height={0}
              full
              className="rounded-xl"
                alt="interiordesign"
            />
          </div>
          <div className="flex flex-col justify-center items-center mr-5">
            <p className="md:text-2xl sm:text-xl text-base font-bold md:my-5 sm:my-3 my-1 text-sky-950">
              3. Interior Design
            </p>
            <p className="text-center md:text-base sm:text-sm text-xs font-light text-sky-950 md:mb-5 sm:mb-3 mb-2">
              "Arkadia Works takes pride in our Interior Design service, where
              creativity meets functionality. Our interior designers collaborate
              closely with clients to understand their preferences, lifestyle,
              and business objectives. Whether it's designing inviting
              commercial spaces, stylish residences, or functional office
              layouts, we strive to create interiors that reflect our client's
              identity while optimizing the use of space and enhancing the
              overall user experience."
            </p>
          </div>
        </div>

        <div className="bg-slate-400 grid grid-cols-2 gap-4 mb-10 rounded-3xl mt-5">
          <div className="flex flex-col justify-center items-center ml-5">
            <p className="md:text-2xl sm:text-xl text-base font-bold md:my-5 sm:my-3 my-1 text-sky-950">
              4. Landscape Design
            </p>
            <p className="text-center md:text-base sm:text-sm text-xs font-light text-sky-950 md:mb-5 sm:mb-3 mb-2">
              "In our Landscape Design service, we leverage nature as a palette
              to enhance the beauty and functionality of outdoor spaces. From
              private gardens to public parks, our landscape architects infuse
              creativity into the design process. Emphasizing sustainability, we
              integrate plant selections, hardscapes, and water features to
              create harmonious and visually stunning landscapes that seamlessly
              connect with the built environment."
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mr-10 py-7">
            <Image
              src="/landscape.jpg"
              width={400}
              height={0}
              full
              className="rounded-xl"
                alt="landscape"
            />
          </div>
        </div>
        <div className="bg-slate-500 grid grid-cols-2 gap-4 mb-10 rounded-3xl mt-5">
          <div className="flex flex-col justify-center items-center ml-10 py-7">
            <Image
              src="/urban.jpg"
              width={400}
              height={0}
              full
              className="rounded-xl"
                alt="urban"
            />
          </div>
          <div className="flex flex-col justify-center items-center mr-5">
            <p className="md:text-2xl sm:text-xl text-base font-bold md:my-5 sm:my-3 my-1 text-sky-950">
              5. Urban Design
            </p>
            <p className="text-center md:text-base sm:text-sm text-xs font-light text-sky-950 md:mb-5 sm:mb-3 mb-2">
              "Arkadia Works excels in Urban Design, where we contribute to
              shaping vibrant and sustainable cities. Our urban designers focus
              on creating holistic solutions that consider transportation,
              public spaces, infrastructure, and community needs. By blending
              functionality with aesthetics, we aim to enhance the quality of
              urban life and contribute to the long-term sustainability of the
              built environment."
            </p>
          </div>
        </div>
      </div>

      {/* Testimoni */}
      <div className="flex flex-col max-w-6xl m-auto justify-center text-center mt-10">
        <p className="md:text-3xl sm:text-xl text-lg font-bold text-sky-950 mb-10 ">
          Some of Our Projects and Client's Responses:{" "}
        </p>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mb-2 max-w-6xl text-center content-center  m-auto">
        <div className="flex flex-col justify-center items-center ml-5 md:pb-7">
          <Image src="/projectA.jpg" width={3000} height={0} full alt="project"/>
          <p className="md:text-[14px] sm:text-[13px] text-[12px] font-bold text-sky-950 pt-2">
            Heritage Home Restoration
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ml-5 pb-7">
          <Image
            src="/client1.jpg"
            width={110}
            height={0}
            className="rounded-full"
              alt="client"
          />
          <p className="md:text-lg sm:text-base text-sm font-bold text-sky-950">
            James Rodriguez
          </p>
          <p className="md:text-[14px] sm:text-[13px] text-[12px]">
            "Arkadia Works played a pivotal role in restoring our heritage home.
            Their architectural expertise ensured the preservation of the
            historical charm while incorporating contemporary elements. The
            renovation was executed with precision, breathing new life into
            every corner of the house. The team's dedication to maintaining the
            authenticity of the property exceeded our expectations. Arkadia
            Works has not just restored our home; they've revitalized its soul."
          </p>
        </div>

        <div className="flex flex-col justify-center items-center ml-5 md:pb-7">
          <Image src="/projectB.jpg" width={3000} height={0} full alt="project" />
          <p className="md:text-[14px] sm:text-[13px] text-[12px] font-bold text-sky-950 pt-2">
            Corporate Office Transformation
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ml-5 pb-7">
          <Image
            src="/client2.jpg"
            width={110}
            height={0}
            className="rounded-full"
              alt="client"
          />
          <p className="md:text-lg sm:text-base text-sm font-bold text-sky-950">
            Emma Chen, CEO of HorizonTech Solutions
          </p>
          <p className="md:text-[14px] sm:text-[13px] text-[12px]">
            "Arkadia Works brought a visionary approach to the transformation of
            our corporate office. The interior design seamlessly aligned with
            our brand identity, fostering a dynamic and inspiring work
            environment. The architectural enhancements showcased innovation and
            efficiency. The renovation project was executed with minimal
            disruption to our operations, reflecting the team's professionalism.
            Arkadia Works has elevated our workspace, creating a lasting impact
            on both our employees and clients. Exceptional results, exceptional
            team."
          </p>
        </div>

        <div className="flex flex-col justify-center items-center ml-5 md:pb-7">
          <Image src="/projectC.jpg" width={3000} height={0} full alt="project"/>
          <p className="md:text-[14px] sm:text-[13px] text-[12px] font-bold text-sky-950 pt-2">
            Zen Garden Retreat
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ml-5 pb-7">
          <Image
            src="/client3.jpg"
            width={110}
            height={0}
            className="rounded-full"
              alt="client"
          />
          <p className="md:text-lg sm:text-base text-sm font-bold text-sky-950">
            Jennifer Martin
          </p>
          <p className="md:text-[14px] sm:text-[13px] text-[12px]">
            "Arkadia Works brought tranquility to my backyard with the creation
            of a Zen garden retreat. The landscape design transformed my outdoor
            space into a peaceful sanctuary. The attention to plant selection,
            hardscapes, and water features reflects a deep understanding of the
            principles of Zen. I am now able to escape the hustle and bustle of
            daily life right in my own backyard. Arkadia Works' expertise has
            truly enriched my living experience."
          </p>
        </div>
      </div>

      <Contact />
    </>
  );
}
