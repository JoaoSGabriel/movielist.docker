import { useEffect, useState } from "react";
import useRatedMovie from "../../hooks/apiUtils/useRatedMovies";

import MediaCard from "../MediaCard";
import { Container, List, Text } from "./ListStyle";
import Loader from "./Loader";

export default function RatedList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getRated, ratedLoading } = useRatedMovie();

  useEffect(() => {
    const promisse = getRated();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 6));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Text>{children}</Text>
      {ratedLoading ? (
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
