import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRatedMovie from "../../hooks/apiUtils/useRatedMovies";

import MediaCard from "../mediaCard/index";
import { Container, List, Text } from "./ListStyle";
import Loader from "../Loader";

export default function RatedList() {
  const [movieList, setMovieList] = useState([]);
  const { getRated, ratedLoading } = useRatedMovie();

  const navigate = useNavigate();

  useEffect(() => {
    const promisse = getRated();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 6));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Text>
        <h1>Mais populares</h1>
        <h2
          onClick={() => {
            navigate("/movies/popular/1");
          }}
        >
          Ver mais
        </h2>
      </Text>
      {ratedLoading ? (
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
