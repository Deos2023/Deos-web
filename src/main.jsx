import React from 'react'
import { createRoot } from "react-dom/client"
import { Loader } from "@react-three/drei"
import Overlay from "./Overlay/Overlay"
import Scene from "./Scene"
import ScrollToTop from "./component/ScrolltoTop"
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
// import BlogSec from "./section/BlogSec"
// import ContactForm from "./section/ContactForm"
// import TeamSection from "./section/TeamSec"
// import B2BBusinessSection from "./section/B2BBusinessSection"
// import ServicesSection from "./section/ServicesSection"
// import PremiumFAQ from "./section/PremiumFAQ"
// import Navbar from "./component/Navbar"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Loader />
    <Scene />
    <Overlay />
    <ScrollToTop />

    {/* <BrowserRouter>
      {/* <Navbar/> */}
      {/* <Scene />
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/blog" element={<BlogSec />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/business" element={<B2BBusinessSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/questions" element={<PremiumFAQ />} />
      </Routes>
      <ScrollToTop />
      <Loader />
    </BrowserRouter> */} 
  </>
)
