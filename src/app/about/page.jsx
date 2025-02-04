import HeroComp from '@/components/HeroComp';
import React from 'react';

const about = () => {
  return (
    <>
      <HeroComp img={'about-hero'} text={"About us"} />
      <section className='lg:flex lg:p-20 p-4 justify-between'>
        <div className='bg-[#AFE67F] sm:mb-6 p-6 h-auto mb-auto lg:w-[40%]'>
          <div className='border-b border-[#001008] mb-4 pb-2'>
            <h2>WHO WE ARE</h2>
          </div>
          <p>Doklus Green Source Limited stands as a prominent player in Nigeria's business landscape, having been established as a Limited Liability Company in 2016. Our foundation is built on a strong legal framework, as we are duly incorporated under the Company and Allied Commission (CAC) of Nigeria. This official recognition, marked by our registration number 1324718, underscores our commitment to operating with integrity and in full compliance with national regulations.</p>
        </div>
        <div className='lg:w-[55%]'>
          As a wholly indigenous company, we take pride in our Nigerian roots and our contribution to the local economy. Our establishment reflects the growing trend of homegrown businesses rising to meet the specialized needs of key sectors in Nigeria. We bring a unique understanding of the local context, combined with world-class expertise, to deliver exceptional value to our clients.
          <br /> <br />

          Our primary focus lies in two critical sectors of the Nigerian economy: Oil and Gas, and Real Estate. In the Oil and Gas sector, we recognize the pivotal role this industry plays in Nigeria's economic landscape. Our specialized services cater to the complex and evolving needs of this sector, ranging from technical consultancy to innovative product solutions that enhance efficiency and sustainability in oil and gas operations. Simultaneously, we have established a strong presence in the Real Estate sector. Understanding the dynamic nature of property development and management in Nigeria, we offer a comprehensive suite of services and products tailored to meet the diverse needs of this industry. From property development consultancy to cutting-edge construction solutions, we are committed to contributing to the growth and modernization of Nigeria's real estate market.
          <br /> <br />
          At Doklus Green Source Limited, we believe in the power of specialization. By focusing our efforts on these two crucial sectors, we have honed our expertise to deliver unparalleled services and products. Our team of professionals constantly strives to stay ahead of industry trends, ensuring that we offer innovative, efficient, and sustainable solutions to our clients. As we continue to grow and evolve, we remain dedicated to our mission of contributing significantly to the development of Nigeria's Oil and Gas and Real Estate sectors, driving progress, and creating value for all our stakeholders.

        </div>
      </section>
      <section className='lg:mx-20 mx-4 mb-20'>
        <div className="text-center bg-[#009C3E] text-white lg:p-20 p-6 mt-20 text-center">
          <h2>OUR MISSION</h2>
          <div className="lg:w-1/2 mx-auto mt-4">
            <p className="lg:text-xl">To provide excellent and comprehensive business solutions and services, driven by technology, innovation, and well-trained personnel, to our clients: promoting environmental sustainability through the process.</p>
          </div>
        </div>
      </section>
      <section className='lg:mx-20 mx-4 mb-20'>
        <div className='border-b border-[#009C3E] pb-6'>
          <h2 className='text-[#009C3E]'>MANAGEMENT TEAM</h2>
        </div>
      </section>
    </>
  );
};

export default about;