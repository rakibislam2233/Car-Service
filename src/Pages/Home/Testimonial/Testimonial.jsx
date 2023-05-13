import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import quote from '../../../assets/assets/icons/quote.svg'
import img1 from '../../../assets/assets/Testimonial/img1.jpg'
import img2 from '../../../assets/assets/Testimonial/img2.jpg'
import img3 from '../../../assets/assets/Testimonial/img2.jpg'
const Testimonial = () => {
    return (
        <div className="py-10">
        <div className="text-center space-y-2 p-3">
        <h2 className="font-semibold text-xl text-orange-600">Testimonial</h2>
        <h3 className="text-3xl font-bold">What Customer Says</h3>
        <h3>the majority have suffered alteration in some form, by injected humour  <br /> or randomised words which don't look even slightly believable. </h3>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
        <div className="border dark:border-gray-700  p-5 md:h-64 rounded-2xl space-y-4 text-center ">
            <div className='flex justify-between items-center gap-5'>
                <div className='w-full h-full flex gap-2 items-center'>
                    <img className='w-10 h-10 rounded-full' src={img1} alt="" />
                    <div>
                    <h3>Rakib</h3>
                    <h4 className='text-sm'>Student</h4>
                    </div>
                </div>
             <img className="w-10 h-10" src={quote} alt="" />
            </div>
           <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h4>
          </div>
        <div className="border dark:border-gray-700  p-5 md:h-64 rounded-2xl space-y-4 text-center ">
            <div className='flex justify-between items-center gap-5'>
                <div className='w-full h-full flex gap-2 items-center'>
                    <img className='w-10 h-10 rounded-full' src={img2} alt="" />
                    <div>
                    <h3>Rakib</h3>
                    <h4 className='text-sm'>Student</h4>
                    </div>
                </div>
             <img className="w-10 h-10" src={quote} alt="" />
            </div>
           <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h4>
          </div>
        <div className="border dark:border-gray-700  p-5 md:h-64 rounded-2xl space-y-4 text-center ">
            <div className='flex justify-between items-center gap-5'>
                <div className='w-full h-full flex gap-2 items-center'>
                    <img className='w-10 h-10 rounded-full' src={img1} alt="" />
                    <div>
                    <h3>Rakib</h3>
                    <h4 className='text-sm'>Student</h4>
                    </div>
                </div>
             <img className="w-10 h-10" src={quote} alt="" />
            </div>
           <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h4>
          </div>

        </div>
      </div>
    );
};

export default Testimonial;