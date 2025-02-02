import Finance from "@/components/Finance";
import NavBar from "@/components/NavBar";
import ImageSection from "@/components/ImageSection";
import SvgBorder from "@/components/SvgBorder";
import Philosophy from "@/components/Philosophy";
import FinTechTabs from "@/components/FinTechTabs";
import TrustedBy from "@/components/TrustedBy";
import Company from "@/components/Company";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";



const Home = () => {
    return (
      <div>
        <NavBar />
        <Hero/>
        <Finance />
        <SvgBorder />
        <Philosophy/>
        <FinTechTabs/>
        <SvgBorder/>
        <TrustedBy/>
        <Company/>
        <ContactUs/>
        <Footer/>
      </div>
    );
};

export default Home