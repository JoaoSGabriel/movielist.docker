import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getSearchList } from "../../services/TMDB-api";

import MediaCard from "../mediaCard/index";
import Home from "../HomeStyle";
import { List, Text } from "../homePage/ListStyle";

export default function SearchPage() {
  const [movieList, setMovieList] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params?.title) {
      const promisse = getSearchList(params.title);
      promisse.then((p) => {
        if (p) setMovieList(p.results);
      });
    } else {
      setMovieList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Home>
      <List>
        {params?.title ? (
          <Text>Procurando resultados para "{params.title}"</Text>
        ) : (
          <Text>Pesquisa um filme pelo título</Text>
        )}
        <Container>
          {movieList.map((value, index) => (
            <MediaCard
              key={index}
              info={value}
              style={{ margin: "0 30px 20px 0" }}
            />
          ))}
        </Container>
      </List>
    </Home>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media screen and (max-width: 1366px) {
    justify-content: center;
  }
`;
