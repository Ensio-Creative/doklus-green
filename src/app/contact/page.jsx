'use client'

import GoogleMapEmbed from '@/components/GoogleMap';
import HeroComp from '@/components/HeroComp';
import React, { useState } from 'react';


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/info@doklusgreen.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HeroComp img={"contact-hero"} text={"Contact us"} />
      <section className='lg:flex text-[#001008] justify-between lg:p-20 p-4 sm:mt-10'>
        <div className='lg:w-[45%]'>
          <p className='lg:text-xl mb-10'>
            Whether you have questions about our services, need support, or want to share your feedback, we can’t wait to hear from you.
          </p>
          <div className='mb-6'>
            <h2 className='text-[#009C3E]'>HEAD OFFICE</h2>
            <p>10 Ekwulumili Crescent, Independence Layout, <br /> Enugu, Enugu State, Nigeria</p>
            <button className='flex mt-2'>
              <h2 className='my-auto text-sm'>VIEW ON MAP</h2>
              <img className='my-auto ml-3' src="/images/Arrow-2.png" alt="" />
            </button>
          </div>
          <div className='mb-6'>
            <h2 className='text-[#009C3E]'>AWKA OFFICE</h2>
            <p>House 2, Church Road, Ngozika Estate, Awka, <br /> Anambra State, Nigeria</p>
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

        {/* Form with Alert on Submission */}
        <div className='lg:w-[45%] border border-[#E0E0E0] lg:p-10 p-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <h2>Name</h2>
              <input type="text" name="name" required className='p-3 bg-[#D9D9D9] w-full' />
            </div>
            <div className='mb-4'>
              <h2>EMAIL ADDRESS</h2>
              <input type="email" name="email" required className='p-3 bg-[#D9D9D9] w-full' />
            </div>
            <div className='mb-4'>
              <h2>PHONE NUMBER</h2>
              <input type="text" name="phone" className='p-3 bg-[#D9D9D9] w-full' />
            </div>
            <div className='mb-4'>
              <h2>SUBJECT</h2>
              <input type="text" name="subject" className='p-3 bg-[#D9D9D9] w-full' />
            </div>
            <div className='mb-4'>
              <h2>MESSAGE</h2>
              <textarea name="message" className='p-3 bg-[#D9D9D9] w-full h-20' required></textarea>
            </div>

            <div>
              <button
                type="submit"
                className='bg-[#009C3E] p-3 text-white w-full text-sm'
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className='mb-20 sm:mt-10 w-full'>
        <GoogleMapEmbed />
      </section>
    </>
  );
};

export default Contact;
