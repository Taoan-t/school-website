import styles from "./Contact.module.css";
import bg from "../images/cta-bg-img.png";
const Contact = () => {
  return (
    <section class={styles.contact}>
      <div class={styles["contact-card"]} id="contact">
        <img src={bg} alt="shape" class={styles["contact-card-bg"]} />

        <h2>Start Your Best Online Classes With Us</h2>

        <button class={`btn btn-primary ${styles["contact-btn"]}`}>
          <p class="btn-text">Contact Us</p>
          <span class="square"></span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
