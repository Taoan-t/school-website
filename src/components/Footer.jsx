import styles from "./Footer.module.css";
import logo from "../images/school-logo-template.png";
import {
  FacebookLogo,
  InstagramLogo,
  XLogo,
  YoutubeLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

const ourLinks = [
  { linkName: "Home", link: "#home" },
  { linkName: "About Us", link: "#about" },
  { linkName: "Courses", link: "#course" },
  { linkName: "Blog", link: "#blog" },
  { linkName: "Contact Us", link: "#contact" },
];

const otherLinks = [
  { linkName: "Instructor", link: "#" },
  { linkName: "FAQ", link: "#" },
  { linkName: "Event", link: "#" },
  { linkName: "Privacy Policy", link: "#" },
  { linkName: "Term & Condition", link: "#" },
];

const Footer = () => {
  return (
    <footer>
      <div class={styles["footer-grid"]}>
        <div class={styles["grid-item"]}>
          <div class={styles["footer-logo"]}>
            <img src={logo} alt="educator logo" />
          </div>

          <p class={styles["footer-text"]}>
            Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu
            eget, blandit ultricies risus. Vivamus fringilla urna vel risus
            congue accumsan.
          </p>

          <div class={styles["social-link"]}>
            <a href="#home">
              <FacebookLogo class={styles.icon} />
            </a>
            <a href="#home">
              <InstagramLogo class={styles.icon} />
            </a>
            <a href="#home">
              <XLogo class={styles.icon} />
            </a>
            <a href="#home">
              <YoutubeLogo class={styles.icon} />
            </a>
          </div>
        </div>

        <ul class={styles["grid-item"]}>
          <h4 class={styles["item-heading"]}>Our Link</h4>
          {ourLinks.map((link) => (
            <li class={styles["list-item"]}>
              <a href={link.link}>{link.linkName}</a>
            </li>
          ))}
        </ul>

        <ul class={styles["grid-item"]}>
          <h4 class={styles["item-heading"]}>Other Link</h4>
          {otherLinks.map((link) => (
            <li class={styles["list-item"]}>
              <a href={link.link}>{link.linkName}</a>
            </li>
          ))}
        </ul>

        <div class={styles["grid-item"]}>
          <h4 class={styles["item-heading"]}>Subscribe Now</h4>

          <div class={styles.wrapper}>
            <input type="text" name="subscribe" placeholder="Email Address" />

            <button class={styles["send-btn"]}>
              <PaperPlaneTilt class={styles.icon} />
            </button>
          </div>
        </div>
      </div>

      <p class={styles.copyright}>
        Copyright © 2024 <a href="#home">WonderLearnKids</a>. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
