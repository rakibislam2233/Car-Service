import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import team1 from '../../../assets/assets/images/team/1.jpg'
import team2 from '../../../assets/assets/images/team/2.jpg'
import team3 from '../../../assets/assets/images/team/3.jpg'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
    return (
<div className="py-10">
        <div className="text-center space-y-2 pb-20">
        <h2 className="font-semibold text-xl text-orange-600">Team</h2>
        <h3 className="text-3xl font-bold">Meet Our Team</h3>
        <h3>the majority have suffered alteration in some form, by injected humour  <br /> or randomised words which don't look even slightly believable. </h3>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper grid md:grid-cols-3"
      >
        <SwiperSlide>
            <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team1} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team2} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team3} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team1} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team2} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team3} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team1} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team2} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="border p-5 rounded-2xl space-y-3 text-center">
                <img className="w-full h-full rounded-2xl" src={team3} alt="" />
                <h3 className="text-2xl font-semibold">Car Engine Plug</h3>
                <h2 className="font-semibold">Engine Expert</h2>
                <div className="flex justify-center gap-2">
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                    <BsTwitter className="w-6 h-6"></BsTwitter>
                    <BsInstagram className="w-6 h-6"></BsInstagram>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                </div>
            </div></SwiperSlide>
      </Swiper>
      </div>
    );
};

export default Team;