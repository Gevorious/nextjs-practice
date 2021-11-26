import { useRouter } from "next/router";
import EventLIst from "../../components/events/EventLIst";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  let slug = router.query.slug;
  if (!slug) {
    return <p className="center">Loading...</p>;
  }

  const year = +slug[0];
  const month = +slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const visibleEvent = getFilteredEvents({
    year,
    month,
  });

  if ((!visibleEvent, visibleEvent).length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events Found for chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventLIst items={visibleEvent} />
    </>
  );
};

export default FilteredEventsPage;
