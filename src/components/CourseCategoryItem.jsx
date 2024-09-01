import styles from "./CourseCategoryItem.module.css";

const CourseCategoryItem = ({ icon, title, desc }) => {
  return (
    <li class={styles["course-category-item"]}>
      <div>
        <img
          src={icon}
          alt="category icon"
          class={`${styles["category-icon"]} ${styles.default}`}
        />
        <img
          src={icon}
          alt="category icon white"
          class={`${styles["category-icon"]} ${styles.hover}`}
        />
      </div>
      <div>
        <h3 class={styles["category-title"]}>
          <a href="#course">{title}</a>
        </h3>
        <p class={styles["category-subtitle"]}>{desc}</p>
      </div>
    </li>
  );
};

export default CourseCategoryItem;
