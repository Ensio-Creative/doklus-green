'use client'

import { useState } from "react";
// import { ChevronDown } from "lucide-react";

const Accordion = () => {
  const items = [
    {
      title: "Health & Safety",
      content: (<p>
        Our Health, Safety, and Environment (HSE) Consultancy is dedicated to helping organizations create and implement robust HSE policies and programs. We understand that each business has its unique structure and challenges, which is why we tailor our services to meet the specific needs of individual clients. Our team of experts works diligently to formulate comprehensive HSE strategies that not only address the particular requirements of your organization but also fully comply with both international and local regulatory standards.
        <br /> <br />
        We take pride in our ability to navigate the complex landscape of HSE regulations, guidelines, processes, and procedures. Our consultants have extensive experience in translating these requirements into practical, workable policies that seamlessly integrate with your existing business operations. We ensure that your HSE programs are not just compliant on paper, but are also effective and sustainable in practice, fostering a culture of safety and environmental responsibility throughout your organization.
        <br /> <br />
        In addition to our core HSE services, we specialize in designing cost-effective and efficient waste management programs. We recognize that proper waste management is a crucial aspect of environmental stewardship and often a significant challenge for many businesses. Our team employs innovative strategies to help you minimize waste generation, implement effective recycling and disposal methods, and potentially reduce costs associated with waste management. By partnering with us, you can be confident that your organization is not only meeting its HSE obligations but also contributing positively to environmental conservation efforts.
      </p>)
    },
    {
      title: "Environment",
      content: (<p>
        We acknowledge the environmental impact of our activities and take deliberate responsibility for maintaining environmental quality and best practices in services.
        <br /> <br />
        By integrating social and environmental considerations into our business decisions, we aim to reduce the ecological footprint of our operations.
        <br /> <br />
        Our commitment is to act responsibly and sustainably, safeguarding the planet for current and future generations by minimizing our environmental impact.
      </p>)
    }
  ]
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-10 border-t border-[#009C3E]">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#009C3E]">
          <button
            className="w-full flex justify-between items-center p-4 text-left text-xl font-medium transition"
            onClick={() => toggleItem(index)}
          >
            <h2>{item.title}</h2>
            {openIndex !== null && openIndex === index ? <img src="/images/minus.png" alt="" />
              : <img src="/images/plus.png" alt="" />
            }
            {/* <ChevronDown
              className={`w-5 h-5 transition-transform transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
            /> */}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? " p-4" : "max-h-0"}`}
          >
            <div _html>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
