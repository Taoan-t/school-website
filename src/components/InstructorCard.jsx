import styles from "./InstructorCard.module.css";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

const InstructorCard = ({ instructor }) => {
  return (
    <div class={styles["instructor-card"]}>
      <div class={styles["instructor-img-box"]}>
        <img src={instructor.image} alt="instructor" />

        <div class={styles["social-link"]}>
          <a href="#home" class={styles.facebook}>
            <FacebookLogo size={28} weight="fill" />
          </a>
          <a href="#home" class={styles.instagram}>
            <InstagramLogo size={28} weight="fill" />
          </a>
          <a href="#home" class={styles.twitter}>
            <XLogo size={28} weight="fill" />
          </a>
        </div>
      </div>

      <h4 class={styles["instructor-name"]}>{instructor.name}</h4>

      <p class={styles["instructor-title"]}>{instructor.title}</p>
    </div>
  );
};

export default InstructorCard;
