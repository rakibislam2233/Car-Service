import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactSection from "../OurLocation/ContactSection";
import Team from "../OurTeam/Team";
import Product from "../Product/Product";
import Services from "../Sevices/Services";

const Home = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactSection></ContactSection>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;