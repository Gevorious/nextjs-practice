import { useRouter } from "next/dist/client/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";
import Button from "../../components/ui/Button";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event Found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const logisticProps = {
    date: event.date,
    address: event.location,
    image: event.image,
    imageAlt: event.title,
  };
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics {...logisticProps} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
