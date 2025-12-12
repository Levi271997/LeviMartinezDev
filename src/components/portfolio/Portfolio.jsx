import Projects from "./Projects";
import card1 from "../../assets/portfolios-screenshots/aemorph-ss.webp";
import card2 from "../../assets/portfolios-screenshots/rejuve-ss.webp";
import card3 from "../../assets/portfolios-screenshots/dnvbulk-ss.webp";
import card4 from "../../assets/portfolios-screenshots/trill-ss.webp";
import card5 from "../../assets/portfolios-screenshots/smecentre-ss.webp";
import card6 from "../../assets/portfolios-screenshots/bruinsma-ss.webp";
import card7 from "../../assets/portfolios-screenshots/patientgrowth-ss.webp";
import card8 from "../../assets/portfolios-screenshots/kevindam-ss.webp";
import card9 from "../../assets/portfolios-screenshots/jonesdental-ss.webp";


const projectData = [
  {
    id: 1,
    image: card1,
    category: "WORDPRESS",
    title: "Aemorph",
    description:
      "A Singapore-based digital marketing agency that specialises in helping businesses grow their online presence with services like search engine optimisation (SEO), video production, web design & development, content creation, and paid advertising. The agency crafts tailored digital strategies to boost visibility, engagement, and conversions for brands locally and internationally.",
    link: "https://aemorph.com/",
  },
  {
    id: 2,
    image: card2,
    category: "WORDPRESS",
    title: "REJUVE COSMETIx",
    description:
      "A Singapore-based cosmetic and aesthetic brand offering advanced non-surgical beauty treatments and skincare solutions. The company specializes in procedures like wrinkle reduction, dermal fillers, skin boosters, PRP, Rejuran therapies, and other facial rejuvenation services designed to enhance natural beauty and boost confidence.",
    link: "https://rejuvecosmetix.com.au/",
  },
  {
    id: 3,
    image: card3,
    category: "WEB DEVELOPMENT",
    title: "DNV Bulk",
    description:
      "A Singapore-based shipping and trading company officially registered as DNV Bulk and Trade Pte. Ltd. Founded in 2021, it provides ship brokering, vessel commercial management, chartering, and commodity trading services, connecting shipowners and charterers while supporting the transportation and trading of bulk goods across global markets.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "WEB DEVELOPMENT",
    title: "Trill Electrical",
    description:
      "A New South Wales (Australia)-based electrical and solar services company with over a decade of experience in the electrical industry and solar installations. It specialises in commercial and industrial electrical work, including design, consultation, installation, inspection, and maintenance, delivering high-quality workmanship across projects such as government buildings, schools, transport facilities, and more.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "WEB DEVELOPMENT",
    title: "SME Center",
    description:
      "A business support hub designed to help small and medium enterprises (SMEs) start, sustain and grow by offering one-on-one advisory services, business diagnosis, capability workshops, and guidance on government schemes. In Singapore, a network of SME Centres supported by Enterprise Singapore and partner trade associations provides free consulting, training, and resources to boost productivity, innovation, financing, workforce development, and expansion opportunities for local SMEs.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "E-COMMERCE",
    title: "Bruinsma Grasstrees",
    description:
      "A family-owned Australian nursery specialising in premium grass trees (Xanthorrhoea spp.) harvested and grown for gardens, landscapes, and wholesale supply. Operating since 1982, the business is known for sustainably sourcing, expertly transplanting, and selling established grass trees with high survival rates, offering plants that add iconic native beauty to outdoor spaces.",
    link: "#!",
  },
 {
    id: 7,
    image: card7,
    category: "WORDPRESS",
    title: "PatientGrowth",
    description:
      "A digital marketing and business support service that helps small practices grow by providing affordable, customizable marketing solutions including website development, SEO, social media marketing, PPC advertising, content creation, branding, and eCommerce support. It offers a shared resource model so businesses can access professional marketing expertise without hiring a full-time team",
    link: "#!",
  },
  {
    id: 8,
    image: card8,
    category: "WORDPRESS",
    title: "Kevindam.com",
    description:
      "A Singapore-based digital marketing expert and entrepreneur, best known as the CEO and Founder of Aemorph, where he leads digital strategy, SEO, and remote team operations to help businesses grow online. With over a decade of experience in search engine optimisation, no-code tech, and AI-enhanced workflows, Kevin also develops training programs to empower others with practical marketing and business skills.",
    link: "#!",
  },
   {
    id: 9,
    image: card9,
    category: "WORDPRESS",
    title: "Jones Dental",
    description:
      "A family‑oriented dental practice providing comprehensive oral healthcare services, including general dentistry, cosmetic treatments like teeth whitening and veneers, restorative care such as crowns and implants, orthodontics, and emergency dental services to help patients maintain healthy, confident smiles. Practices under the Jones Dental name focus on delivering personalised, high‑quality care in a friendly, comfortable environment.",
    link: "#!",
  },

];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating stunning websites.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
