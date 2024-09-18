import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

import PageHome from "./pages/PageHome";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/RegisterPage" element={<RegisterPage/>} />
      </Routes>
    </Router>
    // <div>
      
    //   {/* Navbar */}
    //   <Navbar/>

    //   {/* Content */}
    //     <HomePage/>

    //   {/* Footer */}
    //   <Footer/>
    // </div>
  );
}

export default App;