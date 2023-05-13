import React from 'react';
import fetures1 from '../../../assets/assets/icons/check.svg'
import fetures2 from '../../../assets/assets/icons/deliveryt.svg'
import fetures3 from '../../../assets/assets/icons/Group 38729.svg'
import fetures4 from '../../../assets/assets/icons/group.svg'
import fetures5 from '../../../assets/assets/icons/person.svg'
import fetures6 from '../../../assets/assets/icons/Wrench.svg'
const Fetures = () => {
    return (
        <div>
        <div className="py-10">
        <div className="text-center space-y-2 p-3">
        <h2 className="font-semibold text-xl text-orange-600">Core Features</h2>
        <h3 className="text-3xl font-bold">Why Choose Us</h3>
        <h3>the majority have suffered alteration in some form, by injected humour  <br /> or randomised words which don't look even slightly believable. </h3>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 p-5">
            <div className='shadow-md border dark:border-gray-700  p-2 py-5 rounded-2xl text-center space-y-3'>
                <img className='mx-auto' src={fetures1} alt="" />
                <h3>100% Guranty</h3>
            </div>
            <div className='shadow-md border dark:border-gray-700  p-2 py-5 rounded-2xl text-center space-y-3'>
                <img className='mx-auto' src={fetures2} alt="" />
                <h3>Expert Team</h3>
            </div>
            <div className='shadow-md border dark:border-gray-700  p-2 py-5 rounded-2xl text-center space-y-3 bg-orange-600 text-white'>
                <img className='mx-auto' src={fetures3} alt="" />
                <h3>Timely Delivery</h3>
            </div>
            <div className='shadow-md border dark:border-gray-700  p-2 py-5 rounded-2xl text-center space-y-3'>
                <img className='mx-auto' src={fetures4} alt="" />
                <h3>Expert Team</h3>
            </div>
            <div className='shadow-md border dark:border-gray-700  p-2 py-5 rounded-2xl text-center space-y-3'>
                <img className='mx-auto' src={fetures5} alt="" />
                <h3>24/7 Support</h3>
            </div>
            <div className='shadow-md border dark:border-gray-700  py-5 rounded-2xl text-center space-y-3'>
                <img className='mx-auto' src={fetures6} alt="" />
                <h3>Best Equipment</h3>
            </div>
        </div>
      </div>
      </div>
    );
};

export default Fetures;