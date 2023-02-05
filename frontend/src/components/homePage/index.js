import TrendingList from "./TrendingList";
import RatedList from "./TopRatedList";
import UpcomingList from "./UpcomingList";
import Home from "../HomeStyle";

export default function HomePage() {
  return (
    <Home>
      <TrendingList />
      <UpcomingList />
      <RatedList />
    </Home>
  );
}
