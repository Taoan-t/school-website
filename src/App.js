import CourseCategory from "./components/CourseCategory";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <CourseCategory />
      <About />
      <Course />
    </div>
  );
}

export default App;
