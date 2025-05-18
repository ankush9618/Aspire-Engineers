import Carosuel from "./components/Carosuel";
import Map from "./components/Map";
import MissionVision from "./components/MissionVision";
import Slidebar from "./utils/Slidebar";
import Name from "./utils/typeWriter/Name";

export default function Home() {
  return (
    <>
      <div>
            <div>
              <Carosuel />
              {/* WELCOME */}
              <div className=" text-zinc-800 mt-5 w-full">
                <h1 className="md:text-3xl text-xl font-bold text-center"><span className="bg-black text-white px-1 md:text-4xl text-2xl opacity-80">W</span>elcome to <span className="text-[#e83433]">
                  <Name/>
                  </span></h1>
                <p className="text-md w-9/10 md:w-8/10 mx-auto text-start mt-5 md:mt-7 font-serif text-zinc-600 hidden md:block">
                  We’re glad you’re here! At <span className="font-bold">Aspire Engineers Pvt. Ltd.</span>, we take pride in delivering top-notch electrical solutions designed to meet the unique needs of every client. With a team of certified and highly skilled professionals, we bring over a decade of hands-on experience, technical expertise, and industry knowledge to every project we undertake. Whether it’s a large-scale industrial setup or a critical infrastructure project, our solutions are built on the pillars of safety, reliability, and affordability. We understand the importance of timely execution, compliance with standards, and seamless integration with your existing systems — which is why we customize every service to ensure optimal performance and long-term value.
                </p>
                <p className="md:hidden text-start w-9/10 mx-auto  mt-5 font-serif text-zinc-600">We're glad you're here! Our team of certified professionals delivers top-notch electrical solutions tailored to your needs — with safety, reliability, and affordability in mind.</p>
              </div>
              <hr className="w-4/5 mx-auto my-3 text-zinc-300" />

              {/* ABOUT US */}
              <div className="h-auto w-full">
                <div className='text-center font-bold text-xl md:text-3xl my-5'>ABOUT <span className='text-[#e83433]'>US</span></div>
                <div className='md:flex md:w-8/10 w-9/10 mx-auto justify-center gap-4 items-center'>
                  <div className='md:min-w-72 ms-auto text-center'>
                    <img src="/assets/images/logoicon1.png" alt="" className='md:w-72 md:h-72 h-32 w-32 mx-auto' />
                  </div>
                  <div className='text-start text-zinc-600 font-serif'>
                    <p><span className='font-bold'>Aspire Engineers Pvt. Ltd.</span> is a trusted name in engineering services, proudly serving clients for over <span className="text-[#e83433]">10 years</span> across Telangana, Andhra Pradesh, and Bhubaneswar. With a strong commitment to quality, safety, and innovation, we have become a reliable partner to some of the most prestigious institutions and corporations in India.</p>

                    <p className="my-3">
                      Our expertise spans a wide range of industrial and infrastructure projects. We are licensed with an <span className="font-semibold">(Electrical Testing & Servicing) A-Grade 33KV License</span>, enabling us to deliver high-quality solutions for high-voltage systems. We have successfully collaborated with major clients including <span className="text-[#e83433]">Dr. Reddy’s Laboratories, Varun Beverages, Biological E. Limited, IIT Hyderabad, KTPS, and NTPC.</span> Our consistent delivery and technical excellence have made us a preferred choice in sectors such as pharmaceuticals, education, beverages, power, and public infrastructure.
                    </p>

                    <p className="hidden md:block">At Aspire Engineers, we believe in building long-term relationships based on trust, transparency, and performance. Our experienced team is driven by a passion for engineering excellence and is committed to delivering solutions that meet the evolving needs of our clients.</p>
                  </div>
                </div>
              </div>
              <hr className="w-4/5 mx-auto my-3 text-zinc-300" />

              {/* MISSION AND VISSION */}
              <div>
                <MissionVision />
              </div>
              <hr className="w-4/5 mx-auto my-3 text-zinc-300" />

              {/* SERVICES */}
              <div className="w-full my-5">
                <div className="w-9/10 md:w-8/10 mx-auto text-center">
                  <div className="text-xl md:text-3xl font-bold">OUR <span className="text-[#e83433]">SERVICES</span></div>
                  <Slidebar/>
                </div>
              </div>

              <hr className="w-4/5 mx-auto my-3 text-zinc-300" />

              <div>

                {/* MAP */}
                <div className='text-center font-bold text-xl md:text-3xl my-5'>OFFICE <span className='text-[#e83433]'>LOCATION</span></div>
                <Map />
              </div>
            </div>
      </div>
    </>

  );
}
