import styles from "./Event.module.css";
import EventCard from "./EventCard";
import image1 from "../images/event-img.jpg";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

const events = [
  {
    name: "Business creativity workshops",
    place: "Canada",
    startTime: "10:30am",
    endTime: "2:30pm",
    date: new Date("2024-02-28"),
  },
  {
    name: "Business creativity workshops",
    place: "Canada",
    startTime: "10:30am",
    endTime: "2:30pm",
    date: new Date("2024-02-28"),
  },
  {
    name: "Business creativity workshops",
    place: "Canada",
    startTime: "10:30am",
    endTime: "2:30pm",
    date: new Date("2024-02-28"),
  },
];

const Event = () => {
  return (
    <section class={styles.event}>
      <div class={styles["event-left"]}>
        <div class={styles["event-banner"]}>
          <img src={image1} alt="event banner" class={styles["banner-img"]} />
        </div>
        <button class={`${styles.play} smooth-zigzag-anim-1`}>
          <div class={`${styles["play-icon"]} pulse-anim`}>
            <PlayCircleIcon class={styles.icon}></PlayCircleIcon>
          </div>
          <p>Watch Us !</p>
        </button>
      </div>
      <div class={styles["event-right"]}>
        <p class={`section-subtitle ${styles["event-subtitle"]}`}>Our Events</p>
        <h2 class={`section-title ${styles["event-title"]}`}>
          Join Our Upcoming Events
        </h2>
        <div class={styles["event-card-group"]}>
          {events.map((event) => (
            <EventCard
              name={event.name}
              place={event.place}
              startTime={event.startTime}
              endTime={event.endTime}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
