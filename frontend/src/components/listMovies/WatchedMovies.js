import { useEffect, useState } from "react";
import styled from "styled-components";
import useToken from "../../hooks/useToken";
import { getAllWatched } from "../../services/WatchedApi";
import Loader from "../homePage/Loader";
import MediaCard from "../MediaCard";

export default function WatchedMovies() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = useToken();

  useEffect(() => {
    if (!token) return;

    setLoading(true);
    const promisse = getAllWatched(token);
    promisse
      .then((p) => {
        setLoading(false);
        setMovieList(p);
      })
      .catch(() => {
        setLoading(false);
        setMovieList([]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Text>Filmes Assitidos</Text>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieList[0] ? (
            <Container>
              {movieList.map((value, index) => (
                <MediaCard
                  key={index}
                  info={value}
                  style={{ margin: "0 30px 20px 0" }}
                />
              ))}
            </Container>
          ) : (
            <Empty>Você não assistiu nenhum filme ainda</Empty>
          )}
        </>
      )}
    </List>
  );
}

const List = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 40px 0 0 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Text = styled.div`
  width: 100%;
  text-align: start;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #516170;
`;

const Empty = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  font-size: 1.5rem;
`;
