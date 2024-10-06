import CustomizeSection from "./CustomizeSection";
import Products from "./Products";
import FAQSection from "./FAQSection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PlanSection from "./PlanSection";
import SupportSection from "./SupportSection";
import WhySection from "./WhySection";
import Gallery from "./Gallery";
import DhisFor from "./DhisFor";

const Home = () => {

    return (
        <>
            <Navbar/>
            <Hero />
            <WhySection />
            <PlanSection />
            <CustomizeSection />
            <FAQSection />
            <SupportSection />
            <Products/>
            <DhisFor/>
            <Gallery/>
            
           
        </>
    )

}

export default Home;