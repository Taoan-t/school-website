import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";
import blogImg1 from "../images/blog-1.jpg";
import blogImg2 from "../images/blog-2.jpg";
import blogImg3 from "../images/blog-3.jpg";

const blogs = [
  {
    image: blogImg1,
    title: "Proin feugiat tortor non neque eleifend.",
    publishDate: new Date("2024-01-06"),
    commentsNum: 12,
  },
  {
    image: blogImg2,
    title: "Proin feugiat tortor non neque eleifend.",
    publishDate: new Date("2024-02-06"),
    commentsNum: 21,
  },
  {
    image: blogImg3,
    title: "Proin feugiat tortor non neque eleifend.",
    publishDate: new Date("2024-03-06"),
    commentsNum: 30,
  },
];

const Blog = () => {
  return (
    <section class={styles.blog} id="blog">
      <p class={`${styles["blog-subtitle"]} section-subtitle`}>Our Blog</p>

      <h2 class={`${styles["blog-title"]} section-title`}>
        Latest Blog & News
      </h2>

      <div class={styles["blog-grid"]}>
        {blogs.map((blog) => (
          <BlogCard
            image={blog.image}
            title={blog.title}
            publishDate={blog.publishDate}
            commentsNum={blog.commentsNum}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
