import styles from "./CourseCard.module.css";
import { StarIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/24/outline";

const CourseCard = ({
  title,
  image,
  instructorName,
  instructorAvtar,
  rating,
  price,
  enrolledUser,
}) => {
  return (
    <div class={styles["course-card"]}>
      <div class={styles["course-banner"]}>
        <img src={image} alt="course banner" />

        {/* <div class={styles["course-tag-box"]}>
          <a href="#" class={`${styles["badge-tag"]} ${styles.orange} `}>
            Business
          </a>
          <a href="#" class={`${styles["badge-tag"]} ${styles.blue} `}>
            Marketing
          </a>
        </div> */}
      </div>

      <div class={styles["course-content"]}>
        <h3 class={styles["card-title"]}>
          <a href="#home">{title}</a>
        </h3>

        <div class={`${styles["border-bottom"]} ${styles.wrapper} `}>
          <div class={styles.author}>
            <img
              src={instructorAvtar}
              alt="course instructor avatar"
              class={styles["author-img"]}
            />
            <a href="#home" class={styles["author-name"]}>
              {instructorName}
            </a>
          </div>

          <div class={styles.rating}>
            <StarIcon class={styles.icon}></StarIcon>
            <p>{rating}</p>
          </div>
        </div>

        <div class={styles.wrapper}>
          <div class={styles["course-price"]}>{price}</div>

          <div class={styles.enrolled}>
            <div class={styles["icon-user"]}>
              <UserIcon></UserIcon>
            </div>

            <p>{enrolledUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
