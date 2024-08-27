import styles from "./Instructor.module.css";
import InstructorCard from "./InstructorCard";
import instructor1 from "../images/instructor-1.jpg";
import instructor2 from "../images/instructor-2.jpg";
import instructor3 from "../images/instructor-3.jpg";
import instructor4 from "../images/instructor-4.jpg";

const instructors = [
  { name: "Adam Brown", image: instructor1, title: "Insturctor" },
  { name: "Olivia Bennett", image: instructor2, title: "Insturctor" },
  { name: "Sophia Brooks", image: instructor3, title: "Insturctor" },
  { name: "Emily Parker", image: instructor4, title: "Insturctor" },
];
const Instructor = () => {
  return (
    <section class={styles.instructor}>
      <p class={`${styles["instructor-subtitle"]} section-subtitle`}>
        Best Coach
      </p>

      <h2 class={`${styles["instructor-title"]} section-title`}>
        Our Expert Instructor
      </h2>

      <div class={styles["instructor-grid"]}>
        {instructors.map((instructor) => (
          <InstructorCard instructor={instructor} />
        ))}
      </div>
    </section>
  );
};

export default Instructor;
