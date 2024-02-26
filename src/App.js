import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Error from "./pages/Erreur/erreur";
import Contact from "./pages/Contact/contact";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Anim from "./components/Anim/anim";

function App() {
  return (
    <div>
      <Router>
        <Anim />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;