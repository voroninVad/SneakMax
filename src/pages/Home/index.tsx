import { FC } from "react";
import About from "../../components/About";
import Catalog from "../../components/Catalog"
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Instagram from "../../components/Instagram";
import Questions from "../../components/Questions";
import Survey from "../../components/Survey";
import Team from "../../components/Team";

type Props = {
    nextStep: () => void;
};

const PageHome: FC<Props> = ({ nextStep }) => {
    return ( 
        <div className="SneakMax">
           <Header />
           <main>
            <Hero />
            <Catalog/>
            <About />
            <Survey nextStep={nextStep}/>
            <Team />
            <Questions />
            <Contacts/>
            <Instagram />
           </main>
           <Footer />
         </div>
     );
}
 
export default PageHome;