import CourseCategory from "./components/CourseCategory";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <CourseCategory />
    </div>
  );
}

export default App;
