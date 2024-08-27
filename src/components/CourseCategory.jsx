import CourseCategoryItem from "./CourseCategoryItem";
import styles from "./CourseCategory.module.css";
import logo1 from "../images/math.png";
import logo2 from "../images/literature.png";
import logo3 from "../images/test-tube.png";
import logo4 from "../images/musical.png";
import logo5 from "../images/sport.png";
import logo6 from "../images/trust.png";

const items = [
  {
    icon: logo1,
    title: "Mathematics",
    desc: "Help children build foundational math skills through fun and interactive activities.",
  },
  {
    icon: logo2,
    title: "Language",
    desc: "Develop communication skills in reading, writing, and speaking, fostering a love for language.",
  },
  {
    icon: logo3,
    title: "Science & Tech",
    desc: "Introduce children to basic scientific concepts and technology through hands-on exploration.",
  },
  {
    icon: logo4,
    title: "The Arts",
    desc: "Explore creativity and self-expression through various art forms, including music and visual arts.",
  },
  {
    icon: logo5,
    title: "Health & Physical",
    desc: "Promotes physical fitness and healthy living habits in an engaging and active way.",
  },
  {
    icon: logo6,
    title: "Social Studies",
    desc: "Learn about community and the world, building an understanding of diverse cultures and citizenship.",
  },
];
const CourseCategory = () => {
  return (
    <section class={styles.category}>
      <p class={`${styles["category-subtitle"]} section-subtitle`}>
        Course Category
      </p>
      <h2 class={`${styles["category-title"]} section-title`}>
        Explore Popular Courses
      </h2>
      <ul class={styles["course-item-group"]}>
        {items.map((item) => (
          <CourseCategoryItem
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default CourseCategory;
