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

const PageHome = () => {
    return ( 
        <div className="SneakMax">
           <Header />
           <main>
            <Hero />
            <Catalog/>
            <About />
            {/* <Survey /> */}
            <Team />
            <Questions />
            <Contacts/>
            <Instagram />
            <Footer />
           </main>
         </div>
     );
}
 
export default PageHome;