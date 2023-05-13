import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowBarLeft, BsArrowBarRight, BsArrowRight } from "react-icons/bs";
const ServiceDetails = () => {
  const singleService = useLoaderData();
  console.log(singleService);
  const { _id, title, service_id, price, img, description } = singleService;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className={`bg-gray-500 w-full h-80 rounded px-2`}
      >
        <div className="w-ful h-full flex justify-center items-center ">
          <h3 className="text-3xl font-semibol text-white">
            Service Name:{title}
          </h3>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto py-10 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-3">
          <img className="rounded-2xl w-full" src={img} alt="" />
          <div className="py-5 px-2">
            <h3 className="text-3xl font-semibold">
              Unique Car Engine Service
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 py-5">
            <div className="border p-10 rounded-2xl space-y-3 shadow-lg dark:border-gray-600">
              <h2 className="text-2xl font-semibold">Instant Car Services</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="border p-10 rounded-2xl space-y-3 shadow-lg dark:border-gray-600">
              <h2 className="text-2xl font-semibold">24/7 Quality Service</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="border p-10 rounded-2xl space-y-3 shadow-lg dark:border-gray-600">
              <h2 className="text-2xl font-semibold">Easy Customer Service</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="border p-10 rounded-2xl space-y-3 shadow-lg dark:border-gray-600">
              <h2 className="text-2xl font-semibold">Quality Cost Service</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <h2>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </h2>
          <div className="py-5 space-y-4">
            <div>
              <h2 className="text-3xl font-semibold">
                3 Simple Steps to Process
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="text-center border p-3 dark:border-gray-600 rounded-2xl shadow-lg">
                <div className="flex justify-center py-2">
                  <div className="w-16 h-16 flex justify-center items-center bg-[#FFECE8] rounded-full">
                    <div className="w-12 h-12 flex justify-center items-center bg-orange-600 rounded-full">
                      01
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Step One</h3>
                <p>It uses a dictionary of over 200 .</p>
              </div>
              <div className="text-center border p-3 dark:border-gray-600 rounded-2xl shadow-lg">
                <div className="flex justify-center py-2">
                  <div className="w-16 h-16 flex justify-center items-center bg-[#FFECE8] rounded-full">
                    <div className="w-12 h-12 flex justify-center items-center bg-orange-600 rounded-full">
                      03
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Step Two</h3>
                <p>It uses a dictionary of over 200 .</p>
              </div>
              <div className="text-center border p-3 dark:border-gray-600 rounded-2xl shadow-lg">
                <div className="flex justify-center py-2">
                  <div className="w-16 h-16 flex justify-center items-center bg-[#FFECE8] rounded-full">
                    <div className="w-12 h-12 flex justify-center items-center bg-orange-600 rounded-full">
                      03
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Step Three</h3>
                <p>It uses a dictionary of over 200 .</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-[#F3F3F3] dark:bg-gray-800 p-5 rounded mt-3 mx-2 ">
              <h2 className="text-3xl font-semibold">Services</h2>
              <div className="space-y-4">
                <div className="p-3 bg-orange-600 rounded">Full Car Repair</div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded">
                  Engine Repair
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded">
                  Automatic Services
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded">
                  Engine Oil Change{" "}
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded">
                  Battery Charge
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#F3F3F3] dark:bg-gray-800 p-5 rounded mt-3 mx-2 space-y-4 ">
                <h2 className="text-3xl font-semibold">Download</h2>
                <div className="flex justify-between">
                  <div>
                    <h3>Our Brochure</h3>
                    <h2>Download</h2>
                  </div>
                  <BsArrowRight className="w-6 h-6"></BsArrowRight>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3>Company Details</h3>
                    <h2>Download</h2>
                  </div>
                  <BsArrowRight className="w-6 h-6"></BsArrowRight>
                </div>
              </div>
            </div>

            <h2 className="text-5xl font-semibold p-4">Price:${price}</h2>
            <div className="p-3">
              <Link to={`/checkOut/${_id}`}>
                <button className="btn btn-block bg-orange-600 border-none ">
                  Proceed Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
