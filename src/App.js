import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Error from "./pages/Erreur/erreur";
import Contact from "./pages/Contact/contact";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Portfolio from "./pages/Portfolio/portfolio";
import Compétences from "./pages/Compétences/compétences"
import Services from "./pages/Services/services"
import Tarifs from "./pages/Tarifs/tarifs"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Compétences" element={<Compétences />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Tarifs" element={<Tarifs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;