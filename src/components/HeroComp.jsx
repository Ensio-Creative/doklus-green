import React from 'react';

const HeroComp = ({ img, text }) => {
  return (
    <section className="relative bg-[#001008] lg:py-10">
      <img className="sm:h-[50vh] mx-auto object-cover" src={`/images/${img}.png`} alt="" />
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#001008] opacity-[75%]"></div>
      <div className="absolute lg:top-96  top-52 lg:w-[60%] lg:left-32 left-4">
        <h2 className=" text-white lg:text-5xl overflow-hidden text-3xl">{text}</h2>
      </div>
    </section>
  );
};

export default HeroComp;