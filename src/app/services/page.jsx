
"use client";

import HeroComp from "@/components/HeroComp";
import { unslug } from "@/utils/stringToSlug";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic"; // Ensures the page is dynamically rendered

const ServicePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceContent />
    </Suspense>
  );
};

const ServiceContent = () => {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("page");

  const services = [
    {
      image: "",
      title: "Real Estate",
      content: (
        <p>At Doklus Green, we specialize in comprehensive real estate services designed to meet the diverse needs of our clients. Our expertise spans two primary areas: real estate development and agency services. With years of experience and a deep understanding of the market, we're equipped to handle projects of any scale or complexity.
          <br /> <br />
          Our real estate development services encompass the entire process from initial concept to final construction. We work closely with investors, architects, and contractors to bring visions to life, whether it's residential complexes, commercial spaces, or mixed-use developments. Our team navigates zoning regulations, secures necessary permits, and oversees construction to ensure projects are completed on time and within budget.
          <br /> <br />
          In our capacity as a real estate agency, we offer a full suite of services to buyers, sellers, and investors. Our agents have an intimate knowledge of local markets, enabling them to provide accurate valuations, effective marketing strategies, and skilled negotiations. We pride ourselves on matching clients with properties that not only meet their immediate needs but also align with their long-term goals.
          <br /> <br />

          Perhaps most importantly, we serve as trusted advisors to our clients throughout their real estate journey. Our team of experts conducts thorough market analyses, providing clients with the insights they need to make informed decisions. We help identify opportunities to maximize the latent value in real estate investments, whether through strategic renovations, repositioning of assets, or timely transactions. Our goal is always to optimize our clients' returns while minimizing their risks in the dynamic world of real estate.</p>
      )
    },
    {
      image: "",
      title: "Tank Calibration",
      content: (
        <p>We offer tank calibration services that play a crucial role in the accurate measurement and verification of quantities and volumes in storage tanks. These services are essential for maintaining good contractual relationships with clients, as they ensure that both parties have confidence in the reported volumes of stored products.
          <br /> <br />

          Calibration is a precise process that determines the exact true volume of a containment system corresponding to specific measurement values. This process is fundamental to obtaining accurate quantity measurements in tanks. Without precise calibration tables, even the most advanced gauging systems and highly accurate manual measurements lose their effectiveness, potentially leading to significant discrepancies in reported volumes.
          <br /> <br />

          The importance of accurate calibration cannot be overstated in industries where precise volume measurements are critical. Inaccurate calibrations can result in financial losses, disputes with clients, and regulatory compliance issues. By partnering with us for tank calibration services, companies can ensure they are utilizing the highest standards of measurement accuracy in their operations.
          <br /> <br />
          Our expertise in tank calibration provides clients with a reliable foundation for their measurement systems. This level of accuracy helps maintain client confidence by eliminating doubt about reported volumes. Moreover, it prevents costly errors that could arise from incorrect volume calculations, ultimately contributing to smoother business operations and stronger client relationships.</p>
      )
    },
    {
      image: "",
      title: "Pressure Testing",
      content: (
        <p>Pressure testing services are a critical component in assessing the integrity and safety of pressure equipment. These services are designed to ensure that all pressurized systems can withstand the operational stresses they will encounter during their service life. At our company, we specialize in providing comprehensive pressure testing solutions that meet industry standards and regulatory requirements.
          <br /> <br />

          Before any pressurized equipment can be placed into service, it must undergo rigorous pressure testing. This mandatory process is crucial for identifying potential weaknesses, leaks, or structural issues that could lead to catastrophic failures if left undetected. Our team of experienced technicians utilizes state-of-the-art equipment and follows strict protocols to conduct these tests, ensuring the highest level of accuracy and reliability.
          <br /> <br />

          Doklus Green is committed to working closely with our clients throughout the hydrostatic pipe testing process. We understand that each project has unique requirements, and we tailor our approach to meet your specific needs. Our collaborative approach ensures that all testing procedures are executed safely and in full compliance with relevant industry standards and regulations.
          <br /> <br />

          Documentation is a key aspect of pressure testing services. We pride ourselves on producing complete and accurate records of all tests performed. These detailed reports provide a comprehensive overview of the testing process, results, and any recommendations for further action. We ensure that this crucial documentation is handed over to all required parties, facilitating smooth communication and regulatory compliance.
          <br /> <br />
          Pressure testing is not just a one-time requirement but an ongoing necessity in many industries. It plays a vital role in confirming that equipment can safely return to operation after repairs or shutdowns. Our services extend beyond initial testing to include periodic assessments, helping you maintain the integrity of your pressure systems throughout their operational life. By partnering with us for your pressure testing needs, you can have confidence in the safety and reliability of your pressurized equipment.</p>
      )
    },
    {
      image: "",
      title: "Leak Testing",
      content: (
        <p>Doklus Green specializes in advanced leak testing services utilizing Helium gas for a wide range of industrial equipment, including Columns, Reactors, Pipelines, and Oil Platforms. Our primary method employs a positive pressure approach, where we pressurize the equipment or pipeline with a carefully calibrated mixture of Nitrogen and Helium. This mixture is applied at the specific testing pressure required by our clients, allowing us to thoroughly examine all potential leak areas.
          <br /> <br />

          Our state-of-the-art Sensitive Helium Spectrometer enables us to detect even the most minute Helium leaks, ensuring comprehensive coverage. This technology is particularly effective for identifying air leakage in condensers and conducting precise leakage tests on condenser tubes. The exceptional sensitivity of our equipment allows us to quantify leak rates as small as 1 x 10^-11 std cc/sec, providing unparalleled accuracy in leak detection.
          <br /> <br />

          Air leakage can significantly impair plant performance, while tube leaks often lead to forced outages, resulting in substantial maintenance costs and lost productivity. To address these challenges, our skilled technicians employ advanced tracer gas leak detection technology. This enables us to swiftly pinpoint leak sources within your facility, minimizing downtime and optimizing operational efficiency.
          <br /> <br />

          Doklus Green has also pioneered an innovative inspection technique specifically designed for detecting leaks in the negative pressure components of Steam Condensers. This is crucial as air leakage is a critical issue for Condenser vacuum systems, severely compromising equipment performance. Air infiltration can blanket the tube surface on the steam side, drastically reducing heat transfer efficiency due to air's poor heat conduction properties. Furthermore, the resulting increase in back pressure leads to higher dissolved oxygen levels in the condensate, causing detrimental effects throughout the system, including deposition on water wall and superheater tubes in the Boiler and on turbine blades.
          <br /> <br />
          Early leak detection and prompt remediation are essential for maintaining optimal condenser performance. Our advanced techniques ensure that the negative pressure parts of condensers and turbines receive the attention they require. By addressing these often-overlooked areas, we help our clients improve overall system efficiency, reduce fuel consumption, and minimize generation losses. With over two decades of experience in leak detection services, Doklus Green combines innovation with expertise to meet and exceed diverse customer requirements across various industries.</p>
      )
    },
    {
      image: "",
      title: "Project Management",
      content: (
        <p>At Doklus Green, we offer a comprehensive suite of project management services designed to empower businesses in their pursuit of efficient project execution. Our expertise spans the entire project lifecycle, from initial planning and strategic development to meticulous execution and ongoing monitoring.
          <br /> <br />

          Our team of seasoned project management professionals brings a wealth of experience to the table. Having successfully navigated complex projects across a diverse range of industries, we possess the knowledge and skills necessary to tackle even the most challenging endeavors. This broad exposure allows us to apply best practices and innovative solutions tailored to each unique project scenario.
          <br /> <br />

          We pride ourselves on our collaborative approach to project management. By working in close partnership with our clients, we ensure that every project plan we develop is perfectly aligned with their specific objectives and business goals. This client-centric methodology not only enhances project outcomes but also fosters a sense of ownership and engagement among all stakeholders involved.
          <br /> <br />

          Our project management services are designed to be scalable and adaptable, catering to the needs of businesses of all sizes and across various sectors. Whether you're undertaking a small-scale internal initiative or a large, multi-faceted project with far-reaching implications, our team is equipped to provide the guidance and support necessary for success.
          <br /> <br />
          By leveraging cutting-edge project management tools and methodologies, we help our clients navigate potential pitfalls, optimize resource allocation, and maintain clear communication channels throughout the project's duration. Our ultimate goal is to deliver projects that not only meet but exceed expectations, driving tangible value for our clients and contributing to their long-term success.</p>
      )
    },
    {
      image: "",
      title: "Procurement",
      content: (
        <p>Doklus Green specializes in providing efficient and effective sourcing and procurement solutions tailored to diverse client needs. Our services are designed to streamline supply chains, ensuring that businesses have access to the necessary resources to operate smoothly.

          <br /> <br />
          We employ cutting-edge sourcing and procurement strategies to help clients achieve significant cost savings and establish stronger relationships with their suppliers. By leveraging our expertise, businesses can optimize their procurement processes and reduce expenses.
          <br /> <br />

          We are committed to delivering exceptional results while prioritizing efficiency, responsiveness, and flexibility. We strive to adapt to our client's evolving needs and provide timely solutions that drive sustainable growth.
          <br /> <br />
          Our goal is to empower businesses to achieve their objectives through our innovative sourcing and procurement services. By partnering with Doklus Green, clients can enhance their supply chain operations and achieve long-term success.</p>
      )
    },
    {
      image: "",
      title: "Tank Fabrication",
      content: (
        <div>
          We provide high-quality LPG and petrol tanks fabrication, ensuring safety, durability, and compliance with industry standards. Our team of skilled craftsmen utilizes advanced techniques and premium materials to deliver exceptional products that meet the diverse needs of our clients.
          <br /> <br />

          We offer a wide range of LPG and PMS tank fabrication services, including:
          <ul className='list-disc'>
            <li><strong>Custom tank design</strong>: We can create tanks of various sizes and specifications to suit your specific requirements.</li>
            <li>
              <strong>Tank modification</strong>
              : We can modify existing tanks to improve their functionality or adapt them to new applications.
            </li>
            <li>
              <strong>Tank repair</strong>
              : We can repair damaged or worn-out tanks to restore their original condition.
            </li>
            <li>
              <strong> Tank installation</strong>
              : Our experienced technicians can install your new or repaired tanks safely and efficiently.
            </li>
          </ul>

          <br /> <br />

          Doklus Green is committed to providing safe and reliable LPG and PMS tanks. We adhere to strict safety regulations and quality control measures to ensure that our products meet the highest standards of excellence. Our tanks are designed to withstand harsh conditions and provide long-lasting performance.
          <br /> <br />

          We understand the importance of timely delivery and exceptional customer service. Our team is dedicated to meeting your deadlines and providing personalized support throughout the fabrication process. We are committed to building strong relationships with our clients based on trust, reliability, and mutual satisfaction.
          <br /> <br />

          If you need high-quality LPG or PMS tank fabrication services, look no further than Doklus Green. Contact us today to discuss your specific requirements and receive a free quote. We are confident that our expertise and commitment to excellence will exceed your expectations.

          <h2 className='my-6 text-[#009C3E]'>TANK FABRICATION PROJECTS</h2>
          <img src="/images/fabrication/tank-fabrication-1.png" className='mb-6 w-full' alt="" />
          <img src="/images/fabrication/tank-fabrication-2.png" className='mb-6 w-full' alt="" />
          <img src="/images/fabrication/tank-fabrication-3.png" className='mb-6 w-full' alt="" />
          <img src="/images/fabrication/tank-fabrication-4.png" className='mb-6 w-full' alt="" />
          <img src="/images/fabrication/tank-fabrication-5.png" className='mb-6 w-full' alt="" />
          <img src="/images/fabrication/tank-fabrication-6.png" className='w-full' alt="" />

        </div>
      )
    },
    {
      image: "",
      title: "Environmental Assessment",
      content: (
        <div>
          <p>
            We conduct comprehensive Environmental Impact Studies and Assessments for oil and gas facilities throughout the country. These studies are crucial for the development and ongoing operations of such facilities, ensuring they meet all environmental regulations and minimize their ecological footprint. Our approach is thorough and meticulous, covering all aspects of potential environmental impact from initial construction to long-term operations.
            <br /> <br />

            Upon engagement, we prioritize arranging on-site visits as swiftly as possible. This hands-on approach allows our team to gain firsthand knowledge of the project site, its surrounding ecosystem, and any unique environmental factors that need to be considered. These site visits form the foundation of our assessment process, enabling us to gather essential data and observations that inform our subsequent analysis and recommendations.
            <br /> <br />

            To ensure the utmost credibility and reliability of our results, we collaborate closely with certified and approved Material Testing Laboratories. This partnership is integral to our process, as it allows us to conduct rigorous analysis of environmental samples collected during our assessments. The involvement of these accredited laboratories adds an extra layer of validity to our findings, providing our clients with confidence in the accuracy and impartiality of our reports.
            <br /> <br />
            Over the years, we have completed more than 100 projects, establishing ourselves as a household name in the field of environmental impact assessment. This impressive track record is a testament to the expertise and dedication of our team of trained professionals. Our experienced staff brings a wealth of knowledge to each project, ensuring that every assessment is conducted with the highest standards of professionalism and technical acumen. As we continue to grow and evolve, we remain committed to providing top-tier environmental assessment services that contribute to responsible development in the oil and gas sector.
          </p>
          <h2 className='my-6 text-[#009C3E]'>ENVIRONMENTAL ASSESSMENT / REPORT PROJECTS</h2>
          <div className='flex justify-between mb-6'>
            <img src="/images/assesment/environmental-assessment-1.png" alt="" />
            <img src="/images/assesment/environmental-assessment-2.png" alt="" />
          </div>
          <div className='flex mt-10 justify-between'>
            <img src="/images/assesment/environmental-assessment-3.png" alt="" />
            <img src="/images/assesment/environmental-assessment-4.png" alt="" />
          </div>
        </div>
      )
    },
    {
      image: "",
      title: "SOP Report",
      content: (
        <p>
          Doklus Green proudly presents our cutting-edge Standard Operating Procedure (SOP) development and implementation service, designed to transform your business operations. As industry leaders in process optimization, we offer a comprehensive solution that elevates your organizational efficiency to new heights. Our team of seasoned experts collaborates closely with your staff to craft bespoke SOPs that not only streamline your workflows but also embed best practices throughout your company. At Doklus Green, we believe that well-structured SOPs are the cornerstone of operational excellence.
          <br /> <br />
          Our signature SOP creation process begins with an in-depth analysis of your current operational landscape. We meticulously examine your existing procedures, identify bottlenecks, and pinpoint opportunities for enhancement. Working in tandem with your key personnel, we develop clear, concise, and actionable SOPs that address your unique business challenges. Whether you're a startup establishing your first set of procedures or an established enterprise looking to refine your processes, Doklus Green delivers SOPs that drive efficiency, ensure compliance, and foster a culture of continuous improvement.
          <br /> <br />

          Implementation is where Doklus Green truly shines. We don't simply hand over a set of documents and consider our job done. Our dedicated implementation specialists guide your team through every step of the transition process. We provide comprehensive training sessions, hands-on workshops, and user-friendly reference materials to ensure seamless adoption of the new procedures. Our support extends well beyond the initial rollout, with our team standing by to address any questions or concerns that may arise. At Doklus Green, we're committed to making your SOP implementation a resounding success.
          <br /> <br />

          To ensure your business remains at the cutting edge of operational efficiency, Doklus Green offers an ongoing SOP maintenance and optimization service. We understand that businesses evolve, industries change, and regulations update. That's why our team conducts regular reviews of your SOPs, identifying areas for refinement and ensuring continued alignment with your business objectives and compliance requirements. This proactive approach keeps your procedures relevant, effective, and adaptive to new challenges. With Doklus Green as your partner, you're not just implementing SOPs; you're embarking on a journey of perpetual operational enhancement, setting new standards in your industry.
        </p>
      )
    },
    {
      image: "",
      title: "MISTDO Training",
      content: (
        <div>
          <p>
            Minimum Industry Safety Training for Downstream (MISTDO) is a specialized safety training program initiated by the Department of Petroleum Resources (DPR) in Nigeria. This comprehensive scheme is specifically designed to address the unique safety requirements of the downstream sector within the Oil and Gas industry.
            <br /> <br />

            Doklus Green has distinguished itself as a leading provider of MISTDO training. Our company has received official registration and accreditation from the DPR, solidifying our position as a trusted and authorized MISTDO training provider. This recognition underscores our commitment to maintaining the highest standards of safety education in the industry.
            <br /> <br />

            At the heart of our training operations is our DPR-approved MISTDO training center, strategically located in Enugu. This state-of-the-art facility has been meticulously designed and equipped to provide an optimal learning environment for our trainees. The center boasts cutting-edge training equipment and resources, ensuring that participants have access to the most up-to-date tools and information in the field of safety training.
            <br /> <br />

            Our Enugu training center is situated in a serene and secure environment, creating an ideal atmosphere for focused learning and skill development. We have carefully selected a team of experienced and knowledgeable training facilitators who are experts in their respective fields. These professionals are dedicated to delivering high-quality instruction, ensuring that our trainees receive the best possible training experience.
            <br /> <br />
            The strategic location of our training center offers additional benefits to our clients. Its proximity to the Enugu DPR office facilitates smooth coordination and communication with regulatory authorities. Furthermore, the availability of nearby hotel facilities provides convenient accommodation options for out-of-town participants, enhancing the overall comfort and convenience of the training experience. These factors combine to create a comprehensive and user-friendly training environment that supports the professional development of individuals in the downstream Oil and Gas sector.
          </p>
          <h2 className='text-[#009C3E] my-6'>MISTDO TRAINING SESSION</h2>
          <img src="/images/training/MISTDO-Training-1.png" className='mb-6 w-full' alt="" />
          <img src="/images/training/MISTDO-Training-2.png" className='mb-6 w-full' alt="" />
          <img src="/images/training/MISTDO-Training-3.png" className='w-full' alt="" />
        </div>
      )
    }
  ]

  const matchedService = services.find(
    (item) => item.title.toLowerCase() === unslug(serviceParam).toLowerCase()
  );

  if (!matchedService) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <HeroComp img={serviceParam} text={matchedService.title} />
      <section className="py-20 px-4 lg:w-[70%] mx-auto">
        {matchedService.content}
      </section>
    </>
  );
};

export default ServicePage;
