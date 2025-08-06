import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discography from "./pages/Discography";
import MusicVideos from "./pages/MusicVideos";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AlbumDetail from "./pages/AlbumDetail"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/albums/:id" element={<AlbumDetail />} />
        <Route path="/music-videos" element={<MusicVideos />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
