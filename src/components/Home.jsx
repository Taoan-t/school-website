import styles from "./Home.module.css";
import banner from "../images/banner.png";
import bannerLine from "../images/banner-line.png";
import bannerBg from "../images/banner-bg.png";
import icon1 from "../images/icon-a.png";
import icon2 from "../images/icon-b.png";
// import icon3 from "../images/icon-c.png";
import icon4 from "../images/icon-c.png";

function Home() {
  return (
    <section class={styles.home} id="home">
      {/* <div class={`${styles["deco-shape"]} ${styles["shape-1"]}`}>
        <img src="./assets/shape-1.png" alt="art shape" width="70" />
      </div>
      <div class={`${styles["deco-shape"]} ${styles["shape-2"]}`}>
        <img src="./assets/shape-2.png" alt="art shape" width="55" />
      </div>
      <div class={`${styles["deco-shape"]} ${styles["shape-3"]}`}>
        <img src="./assets/shape-3.png" alt="art shape" width="120" />
      </div>
      <div class={`${styles["deco-shape"]} ${styles["shape-4"]}`}>
        <img src="./assets/shape-4.png" alt="art shape" width="30" />
      </div> */}

      <div class={styles["home-left"]}>
        <p class="section-subtitle">Welcome To WonderLearn Kids</p>

        <h1 class={styles["main-heading"]}>
          Get Class From Top
          <span class={styles["underline-img"]}>
            &nbsp;Instructor <img src={bannerLine} alt="line" />
          </span>
        </h1>

        <p class={`"section-text" ${styles["home-desc"]}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          impedit quasi optio, natus delectus laudantium unde fuga beatae
          exercitationem blanditiis!
        </p>

        <div class={styles["home-btn-group"]}>
          <button class="btn btn-primary">
            <p class="btn-text">explore courses</p>
            <span class="square"></span>
          </button>
          <button class="btn btn-secondary">
            <p class="btn-text">contact us</p>
            <span class="square"></span>
          </button>
        </div>
      </div>

      <div class={styles["home-right"]}>
        <div class={styles["img-box"]}>
          <img
            src={bannerBg}
            alt="colorful background shape"
            class={styles["background-shape"]}
          />

          <img src={banner} alt="banner" class={styles["banner-img"]} />

          <img
            src={icon1}
            alt=""
            class={`${styles["icon-1"]} smooth-zigzag-anim-1`}
            width="80"
          />
          <img
            src={icon2}
            alt=""
            class={`${styles["icon-2"]} smooth-zigzag-anim-2`}
            width="80"
          />
          {/* <img
            src={icon3}
            alt=""
            class={`${styles["icon-3"]} smooth-zigzag-anim-3`}
            width="60"
          /> */}
          <img src={icon4} alt="" class={`${styles["icon-4"]} drop-anim`} />
        </div>
      </div>
    </section>
  );
}

export default Home;
