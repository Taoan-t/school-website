import styles from "./About.module.css";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import aboutBg from "../images/about-student.jpg";

const About = () => {
  return (
    <section class={styles.about} id="about">
      <div class={styles["about-left"]}>
        <div class={styles["img-box"]}>
          {/* <img
            src="./assets/about-img-bg.png"
            alt="about background"
            class={styles["about-bg"]}
          /> */}
          <img src={aboutBg} alt="about person" class={styles["about-img"]} />
          {/* <img
            src="./assets/banner-aliment-icon-1.png"
            alt=""
            class="icon-1 smooth-zigzag-anim-1"
            width="250"
          />
          <img
            src="./assets/banner-aliment-icon-2.png"
            alt=""
            class="icon-2 smooth-zigzag-anim-3"
            width="195"
          /> */}
        </div>
      </div>
      <div class={styles["about-right"]}>
        <p class={`section-subtitle ${styles["about-subtitle"]}`}>About Us</p>
        <h2 class={`section-title ${styles["about-title"]}`}>
          We Have Best Online Education
        </h2>
        <p class={`section-text ${styles["about-text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          obcaecati vitae, consequatur quis magnam velit nobis quaerat officiis
          nulla? Facere, molestias consequatur! Enim explicabo a pariatur ad
          ratione, earum quo.
        </p>
        <ul class={styles["about-ul"]}>
          <li>
            <CheckBadgeIcon class={styles.icon}></CheckBadgeIcon>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, eligendi.
            </p>
          </li>
          <li>
            <CheckBadgeIcon class={styles.icon}></CheckBadgeIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, distinctio.
            </p>
          </li>
          <li>
            <CheckBadgeIcon class={styles.icon}></CheckBadgeIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, eligendi.
            </p>
          </li>
        </ul>

        <button class="btn btn-primary">
          <p class="btn-text">explore more</p>
          <span class="square"></span>
        </button>
      </div>
    </section>
  );
};

export default About;
