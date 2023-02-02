import { useEffect, useState } from "react";
import useTrendingMovie from "../../hooks/apiUtils/useTrendingMovies";

import MediaCard from "../MediaCard";
import { Container, List, Text } from "./ListStyle";
import Loader from "./Loader";

export default function TrendingList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getTrending, trendingLoading } = useTrendingMovie();

  useEffect(() => {
    const promisse = getTrending();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 6));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Text>{children}</Text>
      {trendingLoading ? (
        <Loader />
      ) : (
        <Container>
          {movieList.map((value, index) => (
            <MediaCard key={index} info={value} />
          ))}
        </Container>
      )}
    </List>
  );
}
