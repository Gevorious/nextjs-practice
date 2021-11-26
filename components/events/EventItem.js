import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "../ui/Button";
import classes from "./EventItem.module.css";

const EventItem = ({ event }) => {
  const { date, image, location, title, id } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("hy", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const eventLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Button link={eventLink}>
              <span>Read More</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
