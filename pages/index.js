import EventLIst from "../components/events/EventLIst";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventLIst items={featuredEvents} />
    </div>
  );
};

export default HomePage;
