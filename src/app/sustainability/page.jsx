import HeroComp from '@/components/HeroComp';
import React from 'react';

const sustainability = () => {
  return (
    <>
      <HeroComp img={"sustainability-hero"} text={"Sustainability"} />
      <section className='py-20 lg:w-[70%] mx-auto'>
        <div>
          Our commitment to sustainability is built on a foundation of prioritizing health, safety, and environmental stewardship. We recognize that the well-being of our employees, clients, and communities is fundamental to our success, and we are dedicated to providing a safe and healthy environment in all aspects of our operations. This includes implementing comprehensive health and safety protocols, conducting regular risk assessments, and fostering a culture of awareness and responsibility to prevent accidents and promote well-being.
          <br /> <br />
          Equally important to our mission is our responsibility to the environment. We strive to reduce our ecological footprint by adopting sustainable practices that focus on energy efficiency, waste reduction, and responsible resource management. Through the use of innovative technologies and continuous improvements, we aim to minimize the environmental impact of our operations, ensuring that we leave a positive legacy for future generations. Our efforts also extend to promoting sustainable practices throughout our supply chain and in collaboration with partners who share our environmental values.
          <br /> <br />

          By integrating health, safety, and environmental sustainability into every facet of our business, we aim to create lasting value for our stakeholders while contributing to a more sustainable and resilient world. We continuously assess our practices to ensure alignment with the highest standards of sustainability, and we remain committed to transparent communication and accountability in our journey towards a healthier and more sustainable future for all.
        </div>
      </section>
    </>
  );
};

export default sustainability;