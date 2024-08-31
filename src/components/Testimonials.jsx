import styles from "./Testimonials.module.css";
import quote from "../images/quote.png";
import client from "../images/client.jpg";

const Testimonials = () => {
  return (
    <section class={styles.testimonials}>
      <div class={styles["testimonials-left"]}>
        <p class={`section-subtitle ${styles["testimonials-subtitle"]}`}>
          Testimonial
        </p>

        <h2 class={`section-title ${styles["testimonials-title"]}`}>
          What Our Client Says About Us
        </h2>

        <p class="section-text">
          Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat
          vehicula sem, et imperdiet enim tempor id. Phasellus lobortis
          efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor
          ligula ullamcorper venenatis.
        </p>
      </div>

      <div class={styles["testimonials-right"]}>
        <div class={styles["testimonials-card"]}>
          <img src={quote} alt="quote icon" class={styles["quote-img"]} />

          <p class={styles["testimonials-text"]}>
            "Proin feugiat tortor non neque eleifend, at fermentum est
            elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit
            amet ligula ut eleifend. Mauris consequat mauris sit amet turpis
            commodo fermentum. Quisque consequat tortor ut nisl finibus".
          </p>

          <div class={styles["testimonials-client"]}>
            <div class={styles["client-img-box"]}>
              <img src={client} alt="client christine rose" />
            </div>

            <div class={styles["client-detail"]}>
              <h4 class={styles["client-name"]}>Christine Rose</h4>

              <p class={styles["client-title"]}>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
