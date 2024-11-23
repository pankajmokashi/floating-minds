import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses/Courses";
import Blogs from "./pages/Blogs";
import Academics from "./pages/Academics";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Fullstack from "./pages/Courses/Fullstack";
import Testing from "./pages/Courses/Testing";
import DigitalMarketing from "./pages/Courses/DigitalMarketing";
import "../src/App.css";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="full-stack-java-course" element={<Fullstack />} />
            <Route path="software-testing" element={<Testing />} />
            <Route
              path="digital-marketing-course"
              element={<DigitalMarketing />}
            />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
