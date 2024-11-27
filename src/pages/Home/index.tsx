import About from "../../components/About";
import Catalog from "../../components/Catalog"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
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
           </main>
         </div>
     );
}
 
export default PageHome;