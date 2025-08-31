import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NumberGame from "./components/NumberGame";
import Services from "./components/Services";
import Skills from "./components/Skills";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  return<>
    <Header/>
    <Hero/>
    <NumberGame/>
    <Services/>
    <TrustedBy/>
    <Skills/>
    <Footer/>
  </>
}
export default App;