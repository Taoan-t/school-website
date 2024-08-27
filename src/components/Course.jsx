import styles from "./Course.module.css";
import CourseCard from "./CourseCard";
import course1 from "../images/course-math.jpg";
import instructor1 from "../images/avatar-instructor-1.jpg";
import instructor2 from "../images/avatar-instructor-2.jpg";
import instructor3 from "../images/avatar-instructor-3.jpg";
import instructor4 from "../images/avatar-instructor-4.jpg";
import instructor5 from "../images/avatar-instructor-5.jpg";
import instructor6 from "../images/avatar-instructor-6.jpg";

const courseItems = [
  {
    title: "Math Mastery: Problem-Solving Techniques",
    image: course1,
    instructorName: "Adam Brown",
    instructorAvtar: instructor1,
    rating: "5.0 (2k)",
    price: "$500.00",
    enrolledUser: "60k",
  },
  {
    title: "Reading Comprehension and Critical Thinking",
    image: course1,
    instructorName: "Olivia Bennett",
    instructorAvtar: instructor2,
    rating: "5.0 (2k)",
    price: "$500.00",
    enrolledUser: "60k",
  },
  {
    title: "Robotics and Coding for Young Innovators",
    image: course1,
    instructorName: "Sophia Brooks",
    instructorAvtar: instructor3,
    rating: "5.0 (2k)",
    price: "$500.00",
    enrolledUser: "60k",
  },
  {
    title: "Art and Design: Exploring Creativity Through Visual Arts",
    image: course1,
    instructorName: "Emily Parker",
    instructorAvtar: instructor4,
    rating: "5.0 (2k)",
    price: "$500.00",
    enrolledUser: "60k",
  },
  {
    title: "STEM Explorers: Science, Technology, Engineering, and Math",
    image: course1,
    instructorName: "Lucas Mitchell",
    instructorAvtar: instructor5,
    rating: "5.0 (2k)",
    price: "$500.00",
    enrolledUser: "60k",
  },
  {
    title: "Creative Writing and Storytelling Workshop",
    image: course1,
    instructorName: "Ava Collins",
    instructorAvtar: instructor6,
    rating: "5.0 (2k)",
    price: "$500.00",
    enrolledUser: "60k",
  },
];
const Course = () => {
  return (
    <section class={styles.course} id="course">
      <p class={`section-subtitle ${styles["course-subtitle"]}`}>
        Our Online Courses
      </p>
      <h2 class={`section-title ${styles["course-title"]}`}>
        Find The Right Online Course For You
      </h2>

      <div class={styles["course-grid"]}>
        {courseItems.map((item) => (
          <CourseCard
            title={item.title}
            image={item.image}
            instructorName={item.instructorName}
            instructorAvtar={item.instructorAvtar}
            rating={item.rating}
            price={item.price}
            enrolledUser={item.enrolledUser}
          />
        ))}
      </div>
      <button class={`btn btn-primary ${styles["course-btn-primary"]}`}>
        <p class="btn-text">View All Course</p>
        <span class="square"></span>
      </button>
    </section>
  );
};

export default Course;
