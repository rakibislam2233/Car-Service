const SliederComponent = ({ bg }) => {
    return (
      <div
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode:'multiply'
        }}
        className={`bg-gray-500 w-full h-screen rounded px-2`}
      >
          <div className="w-ful h-full flex justify-center items-center lg:justify-start ">
             <div className="w-full lg:w-1/2 p-5 md:p-20 space-y-4 ">
             <h3 className="text-6xl text-white font-semibold">Affordable Price For Car Servicing</h3>
              <h4 className="text-xl text-slate-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>
              <div className="space-y-4 md:space-y-0 md:space-x-5">
                  <button className="btn w-52  bg-orange-600 border-none text-white">Discover More</button>
                  <button className="w-52 btn btn-outline text-white">Latest Project</button>
              </div>
             </div>
          </div>
      </div>
    );
  };
  
  export default SliederComponent;
  