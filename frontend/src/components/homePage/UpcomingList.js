import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUpcomingMovie from "../../hooks/apiUtils/useUpcomingMovies";

import MediaCard from "../mediaCard/index";
import { Container, List, Text } from "./ListStyle";
import Loader from "../Loader";

export default function UpcomingList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getUpcoming, upcomingLoading } = useUpcomingMovie();

  const navigate = useNavigate();

  useEffect(() => {
    const promisse = getUpcoming();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 6));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Text>
        <h1>Nos cinemas</h1>
        <h2
          onClick={() => {
            navigate("/movies/upcoming/1");
          }}
        >
          Ver mais
        </h2>
      </Text>
      {upcomingLoading ? (
        <Loader />
      ) : (
        <Container>
          {movieList.map((value, index) => (
            <MediaCard key={index} info={value} buttons={true} />
          ))}
        </Container>
      )}
    </List>
  );
}
