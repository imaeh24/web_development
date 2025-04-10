import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route index element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Gallery' element={<Gallery/>} />
        <Route path='Plans' element={<Plans/>} />
        <Route path='Trainers' element={<Trainers/>} />
        <Route path='*' element={<NotFound/>} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
