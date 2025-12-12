import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Design",
    description:
      "create visually stunning and user-friendly websites that engage visitors and drive results. From responsive design to seamless navigation, our web design solutions combine creativity and functionality to elevate your online presence.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "I build fast, secure, and scalable websites tailored to your business needs. Using the latest technologies, we deliver seamless functionality, robust performance, and a smooth user experience across all devices.",
  },
  {
    id: 3,
    title: "Graphic Designs",
    description:
      "I craft visually compelling designs that bring your brand to life. From logos and marketing materials to digital graphics, our creative solutions communicate your message effectively and leave a lasting impression.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing websites, graphic designing, video editing, develops static and dynamic web applications that deliver value
            and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
