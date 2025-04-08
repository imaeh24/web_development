import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import notFound from "./pages/notFound/notFound";
import Plans from "./pages/plans/plans";
import Trainers from "./pages/trainers/trainers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Contact />
      <Gallery />
      <Home />
      <notFound />
      <Plans />
      <Trainers />
    </BrowserRouter>
  );
};

export default App;
