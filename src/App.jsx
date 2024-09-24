import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

import PageHome from "./pages/PageHome";
import PageMenu from "./pages/PageMenu";
import PageGallery from "./pages/PageGallery";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="/PageMenu" element={<PageMenu/>} />
        <Route path="/PageGallery" element={<PageGallery/>} />
        {/* <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/RegisterPage" element={<RegisterPage/>} /> */}
      </Routes>
    </Router>

    
  );
}

export default App;