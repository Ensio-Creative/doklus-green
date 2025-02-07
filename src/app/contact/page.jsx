import GoogleMapEmbed from '@/components/GoogleMap';
import HeroComp from '@/components/HeroComp';
import React from 'react';

const contact = () => {
  return (
    <>
      <HeroComp img={"contact-hero"} text={"Contact us"} />
      <section className='lg:flex text-[#001008] justify-between lg:p-20 p-4 sm:mt-10'>
        <div className='lg:w-[45%]'>
          <p className='lg:text-xl mb-10'>Whether you have questions about our services, need support, or want to share your feedback, we can’t wait to hear from you.
          </p>
          <div className='mb-6'>
            <h2 className='text-[#009C3E]'>HEAD OFFICE</h2>
            <p>10 Ekwulumili Crescent, Independence Layout, <br />
              Enugu, Enugu State, Nigeria</p>
            <button className='flex mt-2'>
              <h2 className='my-auto text-sm'>VIEW ON MAP</h2>
              <img className='my-auto ml-3' src="/images/Arrow-2.png" alt="" />
            </button>
          </div>
          <div className='mb-6'>
            <h2 className='text-[#009C3E]'>AWKA OFFICE</h2>
            <p>House 2, Church Road, Ngozika Estate, Awka, <br />
              Anambra State, Nigeria</p>
            <button className='flex mt-2'>
              <h2 className='my-auto text-sm'>VIEW ON MAP</h2>
              <img className='my-auto ml-3' src="/images/Arrow-2.png" alt="" />
            </button>
          </div>
          <div className='mb-6'>
            <h2 className='text-[#009C3E]'>PHONE NUMBER</h2>
            <p>+234 806 783 9082, +234 803 804 3658</p>
          </div>
          <div className='mb-6'>
            <h2 className='text-[#009C3E]'>EMAIL ADDRESS</h2>
            <p>info@doklusgreen.com</p>
          </div>
        </div>
        <div className='lg:w-[45%] border border-[#E0E0E0] lg:p-10 p-4'>
          <div className='mb-4'>
            <h2>Name</h2>
            <input type="text" className='p-3 bg-[#D9D9D9] w-full' />
          </div>
          <div className='mb-4'>
            <h2>EMAIL ADDRESS</h2>
            <input type="text" className='p-3 bg-[#D9D9D9] w-full' />
          </div>
          <div className='mb-4'>
            <h2>PHONE NUMBER</h2>
            <input type="text" className='p-3 bg-[#D9D9D9] w-full' />
          </div>
          <div className='mb-4'>
            <h2>SUBJECT</h2>
            <input type="text" className='p-3 bg-[#D9D9D9] w-full' />
          </div>
          <div className='mb-4'>
            <h2>MESSAGE</h2>
            <textarea className='p-3 bg-[#D9D9D9] w-full h-20'></textarea>
          </div>
          <div>
            <button className='bg-[#009C3E] p-3 text-white w-full text-sm'>SEND MESSAGE</button>
          </div>
        </div>
      </section>
      <section className='mb-20 sm:mt-10 w-full'>
        <GoogleMapEmbed />
      </section>
    </>
  );
};

export default contact; <HeroComp img={"sustainability-hero"} text={"Sustainability"} />
