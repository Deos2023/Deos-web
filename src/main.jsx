import { createRoot } from "react-dom/client"
import { Loader } from "@react-three/drei"
import Overlay from "./Overlay/Overlay"
import Scene from "./Scene"
import ScrollToTop from "./component/ScrolltoTop"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Scene />
    <Overlay />
    <Loader />
    <ScrollToTop/>
  </>
)
