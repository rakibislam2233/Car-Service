import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("https://car-service-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
  <div className="py-10">
    <div className="text-center space-y-2 p-3">
    <h2 className="font-semibold text-xl text-orange-600">Service</h2>
    <h3 className="text-3xl font-bold">Our Service Area</h3>
    <h3>the majority have suffered alteration in some form, by injected humour  <br /> or randomised words which don't look even slightly believable. </h3>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {
            datas.map(data =><ServiceCard key={data._id} data={data}></ServiceCard>)
        }
    </div>
    <div className="flex justify-center">
        <button className="btn bg-orange-600 border-none">More Services</button>
    </div>
  </div>
  );
};

export default Services;
