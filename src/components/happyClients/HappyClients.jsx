import Marquee from "react-fast-marquee";
const commonSVGClass = "h-5 sm:h-8 md:h-10";

import brand1 from '../../assets/companies/toft.svg';
import brand2 from '../../assets/companies/tmd.avif';
import brand3 from '../../assets/companies/aemorph_logo.jpg';


const brandLogos = [
  <>
    {/* GOOGLE */}
   <img src={brand1} className={`${commonSVGClass}`}/>

  </>,
  <>
    {/* Dribble */}
     <img src={brand2} className={`${commonSVGClass}`}/>
  </>,
  <>
    {/* LinkedIn */}
    
  </>,
  <>
   
    <img src={brand3} className={`${commonSVGClass}`}/>
  </>,
    <>
    {/* GOOGLE */}
   <img src={brand1} className={`${commonSVGClass}`}/>

  </>,
  <>
    {/* Dribble */}
     <img src={brand2} className={`${commonSVGClass}`}/>
  </>,
  <>
    {/* LinkedIn */}
    
  </>,
  <>
   
    <img src={brand3} className={`${commonSVGClass}`}/>
  </>,
    <>
    {/* GOOGLE */}
   <img src={brand1} className={`${commonSVGClass}`}/>

  </>,
  <>
    {/* Dribble */}
     <img src={brand2} className={`${commonSVGClass}`}/>
  </>,
  <>
    {/* LinkedIn */}
    
  </>,
  <>
   
    <img src={brand3} className={`${commonSVGClass}`}/>
  </>,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
