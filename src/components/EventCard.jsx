import styles from "./EventCard.module.css";

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

const EventCard = ({ name, place, startTime, endTime, date }) => {
  return (
    <div class={styles["event-card"]}>
      <div class={styles["content-left"]}>
        <p class={styles.day}>{date.getUTCDate()}</p>
        <p class={styles.month}>{`${
          months[date.getMonth()]
        }, ${date.getFullYear()}`}</p>
      </div>
      <div class={styles["content-right"]}>
        <div class={styles.schedule}>
          <p class={styles.time}>
            {startTime} To {endTime}
          </p>
          <p class={styles.place}>{place}</p>
        </div>
        <a href="#home" class={styles["event-name"]}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default EventCard;
