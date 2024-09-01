import styles from "./BlogCard.module.css";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BlogCard = ({ image, title, publishDate, commentsNum }) => {
  return (
    <div class={styles["blog-card"]}>
      <div class={styles["blog-banner-box"]}>
        <img src={image} alt="blog banner" />
      </div>

      <div class={styles["blog-content"]}>
        <h3 class={styles["blog-title"]}>
          <a href="#">{title}</a>
        </h3>

        <div class={styles.wrapper}>
          <div class={styles["blog-publish-date"]}>
            <CalendarDaysIcon class={styles.icon} />
            <a href="#">{`${publishDate.getUTCDate()} ${
              months[publishDate.getMonth()]
            }, ${publishDate.getFullYear()}`}</a>
          </div>

          <div class={styles["blog-comment"]}>
            <ChatBubbleOvalLeftEllipsisIcon class={styles.icon} />
            <a href="#">{commentsNum} Comments</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
