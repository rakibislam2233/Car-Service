import React from "react";
import { BsCalendarEvent,BsFillTelephoneFill,BsFillGeoAltFill} from "react-icons/bs";
const ContactSection = () => {
  return (
    <div className="bg-[#151515] w-full dark:bg-[#23272F] py-16 rounded p-5">
      <div className="w-full h-full md:flex space-y-4  lg:space-y-0 justify-around items-center text-white">
        <div className="flex gap-2 items-center">
          <BsCalendarEvent className="w-8 h-8"></BsCalendarEvent>
          <div>
            <h2>We are open monday-friday</h2>
            <h3 className="text-xl">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex gap-2 items-center">
        <BsFillTelephoneFill className="w-8 h-8"></BsFillTelephoneFill>
          <div>
            <h2>Have a question?</h2>
            <h3 className="text-xl">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex gap-2 items-center">
        <BsFillGeoAltFill className="w-8 h-8"></BsFillGeoAltFill>
          <div>
            <h2>Need a repair? our address</h2>
            <h3 className="text-xl">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
