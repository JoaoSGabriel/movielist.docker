import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTrendingMovie from "../../hooks/apiUtils/useTrendingMovies";

import MediaCard from "../mediaCard/index";
import { Container, List, Text } from "./ListStyle";
import Loader from "../Loader";

export default function TrendingList({ children }) {
  const [movieList, setMovieList] = useState([]);

  const { getTrending, trendingLoading } = useTrendingMovie();

  const navigate = useNavigate();

  useEffect(() => {
    const promisse = getTrending();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 6));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Text>
        <h1>Tendências da semana</h1>
        <h2
          onClick={() => {
            navigate("/movies/trending/1");
          }}
        >
          Ver mais
        </h2>
      </Text>
      {trendingLoading ? (
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
