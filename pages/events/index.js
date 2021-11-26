import { useRouter } from "next/router";
import EventLIst from "../../components/events/EventLIst";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={searchHandler} />
      <EventLIst items={events} />
    </>
  );
};

export default AllEventsPage;
