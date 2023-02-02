import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllFavorits } from "../../services/FavoritApi";
import LoaderDiv from "../LoaderDiv";
import MediaCard from "../MediaCard";

export default function Movies({ token, profile }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setLoading(true);
      const promisse = getAllFavorits(token, profile.username);
      promisse
        .then((e) => {
          setMovies(e);
          setLoading(false);
        })
        .catch(() => {
          setMovies([]);
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  function renderMovies() {
    if (movies[0]) {
      return movies.map((value, index) => (
        <MediaCard
          key={index}
          info={value}
          style={{ margin: "20px 20px 20px 0" }}
        />
      ));
    }
  }

  return (
    <>
      <Title>Filmes favoritos</Title>
      {loading ? (
        <Favorits>
          <LoaderDiv />
        </Favorits>
      ) : (
        <>
          {movies[0] ? (
            <Favorits>{renderMovies()}</Favorits>
          ) : (
            <Favorits>
              <h2>Você ainda não adicionou nenhum favorito ✍(◔◡◔)</h2>
            </Favorits>
          )}
        </>
      )}
    </>
  );
}

const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
`;

const Favorits = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 0 0 0 20px;
  display: flex;
  overflow-x: scroll;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);

  h2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    font-size: 1.3rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
