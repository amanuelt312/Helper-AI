import { BrowserRouter, Routes, Route } from "react-router-dom";
import EssayWriter from "../pages/EssayWriter";
import Home from "./Home";
import Codegen from "./Codegen";
import VideoScript from "./VideoScript";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="EssayWriter" element={<EssayWriter />} />
        <Route path="CodeGenerator" element={<Codegen />} />
        <Route path="VideoScript" element={<VideoScript />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
