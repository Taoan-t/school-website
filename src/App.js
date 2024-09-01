import CourseCategory from "./components/CourseCategory";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import Event from "./components/Event";
import Instructor from "./components/Instructor";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <CourseCategory />
      <About />
      <Course />
      <Event />
      <Instructor />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
