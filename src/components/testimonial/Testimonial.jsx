import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Working with Levi is fantastic",
    quote: `Working with Levi was an absolute pleasure! He took the time to understand my vision and turned it into a sleek, functional website that exceeded my expectations. Communication was seamless, deadlines were met, and the attention to detail was outstanding. I highly recommend Levi to anyone looking for a professional and reliable web developer!`,
    name: "Toft Solutions",
    designation: "CEO",
  },
    {
    message:
      "Levi’s design skills completely elevated our online platform and made it more engaging for our users.",
    quote: `Levi took our ideas and turned them into a visually stunning and highly functional website. His creativity and technical expertise made the entire process smooth and enjoyable. The result exceeded our expectations, and we highly recommend Levi for any web development project!`,
    name: "Kingdom Web Builders",
    designation: "CEO, Web Developer",
  },
  {
    message:
      "Reliable, innovative, and detail-oriented — Levi is a true professional in every sense.",
    quote: `Levi handled our website project with precision and creativity. Communication was always clear, deadlines were met, and every solution he provided improved our digital presence. The final product was flawless. I wouldn’t hesitate to work with Levi again!`,
    name: "Aemorph",
    designation: "CEO, Entrepreneur, Owner",
  },
  {
    message:
      "Collaborating with Levi was a seamless experience — he turned our vision into a polished and functional website effortlessly.",
    quote: `Levi carefully listened to our goals and delivered a website that perfectly balanced aesthetics and usability. He was professional, responsive, and highly skilled. We’re thrilled with the outcome and recommend Levi without hesitation!`,
    name: "Toft Solutions",
    designation: "CEO",
  },
  {
    message:
      "Levi’s expertise in web development helped us revamp our site and significantly improve user engagement.",
    quote: `From concept to completion, Levi guided us through every step of the website development process. His attention to detail and innovative solutions made the project smooth and successful. The website looks incredible, and working with Levi was a pleasure!`,
    name: "Kingdom Web Builders",
    designation: "CEO, Web Developer",
  },
  {
    message:
      "Creative, skilled, and dependable — Levi consistently delivers high-quality results.",
    quote: `Levi delivered our website exactly as envisioned, combining great design with flawless functionality. He’s professional, communicative, and brings a creative touch to every project. We highly recommend Levi for anyone looking to elevate their web presence!`,
    name: "Aemorph",
    designation: "CEO, Entrepreneur, Owner",
  }

];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
