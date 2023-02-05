import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Home from "../HomeStyle";
import PageNumber from "./PageNumber";
import MediaCard from "../mediaCard";
import Loader from "../Loader";

import { getTrendingList } from "../../services/TMDB-api";
import { Container, Text } from "./MoviesPageStyles";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const promisse = getTrendingList(params.page);
    promisse.then((p) => {
      setMovies(p.results);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  function loader() {
    let count = [];
    for (let i = 0; i < 20; i++) {
      count.push(i);
    }

    return count.map((index) => (
      <Loader key={index} style={{ margin: "0 30px 20px 0" }} />
    ));
  }

  return (
    <>
      <Home>
        <Container>
          <Text>Tendências da semana</Text>
          {loading ? (
            <>{loader()}</>
          ) : (
            <>
              {movies.map((value, index) => (
                <MediaCard
                  key={index}
                  info={value}
                  buttons={true}
                  style={{ margin: "0 30px 20px 0" }}
                />
              ))}
            </>
          )}
        </Container>
      </Home>
      <PageNumber path={"trending"} />
    </>
  );
}
