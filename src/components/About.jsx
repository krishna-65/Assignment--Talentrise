import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const AboutUs = ({handleContact}) => {
  return (
    <div className="p-6">
      {/* About Us Content */}
      <h2 className="text-xl font-bold mb-4">About Us</h2>
      <div>
        <img
            src="https://cbx-prod.b-cdn.net/COLOURBOX63787808.jpg?width=800&height=800&quality=70"
            alt="About"
            className="w-full rounded-lg mb-4"
        />
       <div className="text-[0f0f0f] absolute top-1/3 right-2/6 cursor-pointer " onClick={()=>handleContact(true)}>  <MdKeyboardArrowRight className="text-4xl"/></div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        We are a team of dedicated professionals driven by creativity, innovation, and a passion
        for exceptional design. With years of experience in mobile applications and website design,
        we specialize in transforming ideas into captivating digital experiences.
      </p>
      <p className="text-gray-700 text-sm leading-relaxed mt-2">
        Our expertise spans across multiple domains, ensuring that we deliver high-quality,
        user-centric solutions. Whether it's UI/UX design, front-end or back-end development,
        we aim to create products that not only meet but exceed expectations.
      </p>
    </div>
  );
};

export default AboutUs;
