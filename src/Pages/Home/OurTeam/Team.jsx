import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import team1 from "../../../assets/assets/images/team/1.jpg";
import team2 from "../../../assets/assets/images/team/2.jpg";
import team3 from "../../../assets/assets/images/team/3.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        <div className="border dark:border-gray-700  p-5 rounded-2xl space-y-3 text-center">
          <img className="rounded-2xl" src={team1} alt="" />
          <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
          <h2 className="font-semibold">Engine Expert</h2>
          <div className="flex justify-center gap-2">
            <BsFacebook className="w-6 h-6"></BsFacebook>
            <BsTwitter className="w-6 h-6"></BsTwitter>
            <BsInstagram className="w-6 h-6"></BsInstagram>
            <BsLinkedin className="w-6 h-6"></BsLinkedin>
          </div>
        </div>
        <div className="border dark:border-gray-700  p-5 rounded-2xl space-y-3 text-center">
          <img className="rounded-2xl" src={team2} alt="" />
          <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
          <h2 className="font-semibold">Engine Expert</h2>
          <div className="flex justify-center gap-2">
            <BsFacebook className="w-6 h-6"></BsFacebook>
            <BsTwitter className="w-6 h-6"></BsTwitter>
            <BsInstagram className="w-6 h-6"></BsInstagram>
            <BsLinkedin className="w-6 h-6"></BsLinkedin>
          </div>
        </div>
        <div className="border dark:border-gray-700  p-5 rounded-2xl space-y-3 text-center">
          <img className="rounded-2xl" src={team3} alt="" />
          <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
          <h2 className="font-semibold">Engine Expert</h2>
          <div className="flex justify-center gap-2">
            <BsFacebook className="w-6 h-6"></BsFacebook>
            <BsTwitter className="w-6 h-6"></BsTwitter>
            <BsInstagram className="w-6 h-6"></BsInstagram>
            <BsLinkedin className="w-6 h-6"></BsLinkedin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
