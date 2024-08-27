import CourseCategory from "./components/CourseCategory";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import Event from "./components/Event";
import Instructor from "./components/Instructor";

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
    </div>
  );
}

export default App;
