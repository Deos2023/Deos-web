import { createRoot } from "react-dom/client"
import { Loader } from "@react-three/drei"
import Overlay from "./Overlay/Overlay"
import Scene from "./Scene"
import ScrollToTop from "./component/ScrolltoTop"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BlogSec from "./section/BlogSec"
import ContactForm from "./section/ContactForm"
import TeamSection from "./section/TeamSec"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    
    
    <Loader />
    
    <BrowserRouter>
    <Scene />
      <Routes> 
        <Route path="/" element={<Overlay />}/>
        <Route path="/blog" element={<BlogSec/>}/>
        <Route path="/team" element={<TeamSection/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
  </>
)
