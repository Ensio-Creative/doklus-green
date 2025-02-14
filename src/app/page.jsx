'use client'

import { stringToSlug } from "@/utils/stringToSlug";
import Link from "next/link";
import { useState } from "react";



export default function Home() {
  const array = ["Real Estate", "Tank Calibration", "Fabrication", "Pressure Testing", "Leak Testing"]
  const services = ["Real Estate", "Tank Calibration", "Pressure Testing", "Leak Testing", "Project Management", "Procurement", "Fabrication", "Environmental Assessment", "SOP Report", "MISTDO Training"]

  const scrollDown = () => {
    window.scrollBy({ top: 600, behavior: "smooth" }); // Scrolls down by 100px smoothly
  };

  const [show, setShow] = useState(false)

  return (
    <>
      <title>Doklus Green Source Limited</title>
      <section className="relative">
        <img className="sm:h-[80vh] object-cover" src="/images/doklus-green-hero-section.png" alt="" />
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#001008] opacity-[60%]"></div>
        <div className="absolute lg:top-72 top-56 lg:w-[60%] lg:left-20 left-4">
          <h2 className=" text-white lg:text-5xl pb-2 overflow-hidden text-3xl">Transforming needs into
            solutions across oil and
            gas and real estate</h2>

          <button onClick={() => scrollDown()} className="flex mt-20">
            <h2 className="my-auto text-white mr-4">EXPLORE</h2>
            <img className="w-6 h-6" src="/images/arrow.png" alt="" />
          </button>
        </div>
      </section>
      <section className="lg:p-20 p-4">
        <div className="lg:flex justify-between">
          <h2 className="text-[#009C3E] sm:my-6">WELCOME TO DOKLUS GREEN</h2>
          <div className="lg:w-[60%]">
            <p className="lg:text-[25px]">At Doklus Green, we maximize value and drive
              growth through innovative solutions and services with a proven track record of excellence that
              delivers unparalled results for our clients.</p>
          </div>
        </div>
        <div id="commitment" className="text-center lg:h-[450px] bg-[#009C3E]  text-white lg:p-20 p-6 mt-20 text-center">
          <h2 className="lg:mt-10">OUR COMMITMENT</h2>
          <div className="lg:w-1/2 mx-auto mt-4">
            <p className="lg:text-[22px]">We strive to reduce our environmental impact
              by adopting sustainable practices, managing
              resources efficiently, and making responsible choices by achieving a balance between operational excellence and environmental responsibility.</p>
          </div>
        </div>
      </section>
      <section className="lg:flex lg:px-20 p-4 justify-between">
        <div className="lg:w-[45%] my-auto">
          <h2 className="text-[#009C3E] mb-4">ABOUT DOKLUS GREEN</h2>
          <p className="lg:text-xl">With over 20 years of experience and operations, Doklus Green is a leader in real estate development and oil and gas services. We are committed to delivering innovative, sustainable, and high-performing solutions that exceed client expectations. From groundbreaking real estate developments to energy projects that power progress, we are your trusted partner for growth and success.</p>
          <Link href={'/about'}>
            <button className="flex lg:mt-20 mt-10">
              <p className="text-sm my-auto mr-4">LEARN MORE</p>
              <img className=" h-4" src="/images/Arrow-1.png" alt="" />
            </button>
          </Link>
        </div>
        <img className="lg:w-[45%] sm:mt-10" src="/images/about.png" alt="" />
      </section>
      <section className="lg:p-20 p-4">
        <div className="lg:w-[40%]">
          <h2 className="text-[#009C3E] mb-4">DISCOVER OUR SERVICES</h2>
          <p className="lg:text-xl mb-4">We offer a wide range of services that
            consistently solve the needs of our
            clients.</p>
        </div>
        <div className="border-t border-[#009C3E] mt-10">
          {array.map((single, index) => <div className="flex justify-between border-b border-[#009C3E] py-6">
            <div className="lg:w-1/2 w-[80%] flex justify-between">
              <p className="lg:text-4xl text-lg overflow-hidden  font-medium">0{index + 1}</p>
              <p className="lg:text-4xl text-lg overflow-hidden w-[80%] sm:ml-4 lg:w-80 font-medium">{single}</p>
            </div>
            <Link href={`/services?page=${stringToSlug(single)}`}>
              <img className="w-10 h-10" src="/images/arrow-right.png" alt="" />
            </Link>
          </div>)}
          <button onClick={() => setShow(true)} className="flex mt-10 ml-auto">
            <h2 className="text-sm my-auto mr-4">DISCOVER MORE</h2>
            <img className=" h-4" src="/images/Arrow-1.png" alt="" />
          </button>
        </div>
      </section>
      <section className="lg:px-20 lg:pb-20 p-4 text-[#001008] lg:flex">
        <div className="mr-4 bg-[#AFE67F] sm:w-full px-10 py-20 lg:w-[76%]">
          <h2>SUSTAINABILITY</h2>
          <p className="lg:text-xl mt-6">We are committed to integrating sustainability into our operations, prioritizing environment, health and safety while upholding transparency and accountability at all levels.</p>
          <Link href={'/sustainability'}>
            <button className="flex mt-20">
              <h2 className="text-sm my-auto mr-4">LEARN MORE</h2>
              <img className=" h-4" src="/images/Arrow-1.png" alt="" />
            </button>
          </Link>
        </div>
        <img className="lg:h-[400px] lg:w-[40%] object-cover" src="/images/doklus-green-home-sustainability.png" alt="" />
      </section>
      <section className="lg:px-20 px-4 pb-20">
        <div className="lg:w-[30%] text-center mx-auto sm:mt-6">
          <h2 className="mb-4 text-[#009C3E]">SOME OF OUR CLIENTS</h2>
          <p className="lg:text-xl">Our clients are top players both in the public and
            private sectors.</p>
        </div>
        <div className="grid gap-3 mt-10 lg:grid-cols-4 grid-cols-1">
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-auto" src="/images/Government-of-Enugu-State-Logo.png" alt="" />
          </div>
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-8" src="/images/federal-ministry-of-environment-logo.png" alt="" />
          </div>
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-6" src="/images/DPR-Logo.png" alt="" />
          </div>
          <div className="bg-[#F9F9F9] border-t border-[#009C3E]">
            <img className="mx-auto my-8" src="/images/Juhel-Logo.png" alt="" />
          </div>
        </div>
      </section>
      {show && <div className="">

        <div className="fixed shadow-md top-0 left-0 right-0 w-full bg-white z-20 blur-3xl h-screen"></div>
        <div className="fixed lg:w-[80%] mx-auto lg:h-[80vh] my-auto p-10 bg-white z-40 top-0 left-0 right-0 bottom-0">
          <div className="flex justify-between mb-8">
            <h2 className="text-[#009C3E]">ALL SERVICES</h2>
            <div onClick={() => setShow(false)} className="flex cursor-pointer">
              <h2 className="text-[#009C3E]">CLOSE</h2>
              <img className="my-auto ml-2" src="/images/Vector-7.png" alt="" />
            </div>
          </div>
          {services.map((single, index) => <div className="flex justify-between border-b border-[#009C3E] py-3">
            <p className="text-xl">{single}</p>
            <Link onClick={() => setShow(false)} href={`/services?page=${stringToSlug(single)}`}>
              <img className="my-auto" src="/images/Arrow-11.png" alt="" />
            </Link>
          </div>)}
        </div>
      </div>
      }
    </>
  );
}
