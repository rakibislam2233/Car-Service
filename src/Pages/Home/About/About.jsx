import person from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero bg-white dark:bg-[#23272F] py-20">
   <div>
   <div className="hero-content flex-col lg:flex-row gap-5">
       <div className='lg:w-1/2 relative'>
       <img
          src={person}
          className="w-full max-w-sm rounded-lg shadow-2xl"
        />
       <img
          src={parts}
          className="w-full max-w-sm hidden md:block absolute right-4 top-20 rounded-lg shadow-2xl"
        />
       </div>
        <div className='lg:w-1/2 space-y-7'>
        <h2 className='text-2xl text-orange-600 font-semibold'>About Us</h2>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn bg-orange-600 border-none">Get More Info</button>
        </div>
      </div>
   </div>
    </div>
  );
};

export default About;
