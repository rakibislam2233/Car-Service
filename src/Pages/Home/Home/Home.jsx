import About from "../About/About";
import Banner from "../Banner/Banner";
import Fetures from "../Fetures/Fetures";
import ContactSection from "../OurLocation/ContactSection";
import Team from "../OurTeam/Team";
import Product from "../Product/Product";
import Services from "../Sevices/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
         <div className="w-full max-w-7xl mx-auto">
         <About></About>
            <Services></Services>
            <ContactSection></ContactSection>
            <Product></Product>
            <Team></Team>
            <Fetures></Fetures>
            <Testimonial></Testimonial>
         </div>
        </div>
    );
};

export default Home;