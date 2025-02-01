import Finance from "@/components/Finance";
import NavBar from "@/components/NavBar";
import ImageSection from "@/components/ImageSection";
import SvgBorder from "@/components/SvgBorder";
import Philosophy from "@/components/Philosophy";
import FinTechTabs from "@/components/FinTechTabs";
import TrustedBy from "@/components/TrustedBy";
import Company from "@/components/Company";
import Footer from "@/components/Footer";



const Home = () => {
    return (
      <div>
        {/* <NavBar /> */}
        <Finance />
        <SvgBorder />
        <Philosophy/>
        <FinTechTabs/>
        <SvgBorder/>
        <TrustedBy/>
        <Company/>
        <Footer/>
      </div>
    );
};

export default Home