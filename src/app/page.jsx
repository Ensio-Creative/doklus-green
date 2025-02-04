import Image from "next/image";

export default function Home() {
  const array = ["Real Estate", "Tank Calibration", "Tank Fabrication", "Pressure Testing", "Leak Testing"]
  return (
    <>
      <section className="relative">
        <img className="sm:h-[80vh] object-cover" src="/images/doklus-green-hero-section.png" alt="" />
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#001008] opacity-[75%]"></div>
        <div className="absolute lg:top-72 top-40 lg:w-[60%] lg:left-20 left-4">
          <h2 className=" text-white lg:text-5xl text-3xl">Transforming needs into
            solutions across oil and
            gas and real estate</h2>

          <button className="flex mt-20">
            <h2 className="my-auto text-white mr-4">EXPLORE</h2>
            <img className="w-6 h-6" src="/images/arrow.png" alt="" />
          </button>
        </div>
      </section>
      <section className="lg:p-20 p-4">
        <div className="lg:flex justify-between">
          <h2 className="text-[#009C3E]">WELCOME TO DOKLUS GREEN</h2>
          <div className="lg:w-[60%]">
            <p className="lg:text-xl">At Doklus Green, we maximize value and drive
              growth through innovative solutions and services with a proven track record of excellence that
              delivers unparalled results for ur clients.</p>
          </div>
        </div>
        <div id="commitment" className="text-center bg-[#009C3E] text-white lg:p-20 p-6 mt-20 text-center">
          <h2>OUR COMMITMENT</h2>
          <div className="lg:w-1/2 mx-auto mt-4">
            <p className="lg:text-xl">We strive to reduce our environmental impact
              by adopting sustainable practices, managing
              resources efficiently, and making responsible choices by achieving a balance between operational excellence and environmental responsibility.</p>
          </div>
        </div>
      </section>
      <section className="lg:flex lg:px-20 p-4 justify-between">
        <div className="lg:w-[45%] my-auto">
          <h2 className="text-[#009C3E] mb-4">ABOUT DOKLUS GREEN</h2>
          <p className="lg:text-xl">With over 20 years of experience and operations, Doklus Green is a leader in real estate development and oil and gas services. We are committed to delivering innovative, sustainable, and high-performing solutions that exceed client expectations. From groundbreaking real estate developments to energy projects that power progress, we are your trusted partner for growth and success.</p>
          <button className="flex lg:mt-20 mt-10">
            <p className="text-sm my-auto mr-4">LEARN MORE</p>
            <img className=" h-4" src="/images/Arrow-1.png" alt="" />
          </button>
        </div>
        <img className="lg:w-[45%] sm:mt-10" src="/images/about.png" alt="" />
      </section>
      <section className="lg:p-20 p-4">
        <div className="lg:w-[30%]">
          <h2 className="text-[#009C3E] mb-4">DISCOVER OUR SERVICES</h2>
          <p className="lg:text-xl mb-4">We offer a wide range of services that
            consistently solve the needs of our
            clients.</p>
        </div>
        <div className="border-t border-[#009C3E] mt-10">
          {array.map((single, index) => <div className="flex justify-between border-b border-[#009C3E] py-3">
            <div className="lg:w-1/2 w-[80%] flex justify-between">
              <p className="lg:text-4xl text-lg font-medium">0{index + 1}</p>
              <p className="lg:text-4xl text-lg w-full sm:ml-4 lg:w-80 font-medium">{single}</p>
            </div>
            <img className="w-10 h-10" src="/images/arrow-right.png" alt="" />
          </div>)}
          <button className="flex mt-10 ml-auto">
            <h2 className="text-sm my-auto mr-4">DISCOVER MORE</h2>
            <img className=" h-4" src="/images/Arrow-1.png" alt="" />
          </button>
        </div>
      </section>
      <section className="lg:p-20 p-4 text-[#001008] lg:flex">
        <div className="mr-4 bg-[#AFE67F] p-10 w-full">
          <h2>SUSTAINABILITY</h2>
          <p className="lg:text-xl mt-6">We are committed to integrating sustainability into our operations, prioritizing environment, health and safety while upholding transparency and accountability at all levels.</p>
          <button className="flex mt-20">
            <h2 className="text-sm my-auto mr-4">LEARN MORE</h2>
            <img className=" h-4" src="/images/Arrow-1.png" alt="" />
          </button>
        </div>
        <img src="/images/doklus-green-home-sustainability.png" alt="" />
      </section>
      <section className="lg:px-20 px-4 pb-20">
        <div className="lg:w-[30%] text-center mx-auto">
          <h2 className="mb-4 text-[#009C3E]">SOME OF OUR CLIENTS</h2>
          <p className="lg:text-xl">Our clients are top players both in the public and
            private sectors.</p>
        </div>
        <div className="grid gap-3 mt-10 lg:grid-cols-3 grid-cols-1">
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-auto" src="/images/Government-of-Enugu-State-Logo.png" alt="" />
          </div>
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-6" src="/images/DPR-Logo.png" alt="" />
          </div>
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-8" src="/images/Juhel-Logo.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
