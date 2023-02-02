import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCollectionDetails } from "../../../services/TMDB-api";

export default function Collections({ collectionDetails }) {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (collectionDetails?.id) {
      const promisse = getCollectionDetails(collectionDetails.id);
      promisse.then((p) => {
        if (p) setMovieList(p.parts);
      });
    }
  }, [collectionDetails]);

  function contentImage(value) {
    if (value.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${value.poster_path}`;
    }

    return "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
  }

  function seeMore(value) {
    navigate(`/movie/${value.id}`);
  }

  function convertDate(object) {
    return object.split("-").reverse().join("/");
  }

  return (
    <>
      {collectionDetails?.id ? (
        <>
          <h1>Relações</h1>
          <Main>
            {movieList.map((value, index) => (
              <CollectionCard key={index} onClick={() => seeMore(value)}>
                <img src={contentImage(value)} alt="poster" />
                <Info>
                  <h1>{value.title}</h1>
                  <h2>Data de lançamento:</h2>
                  <h2>{convertDate(value.release_date)}</h2>
                </Info>
              </CollectionCard>
            ))}
          </Main>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CollectionCard = styled.div`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: rgb(250, 250, 250);
  border-radius: 3px;
  width: 320px;
  display: flex;
  border-radius: 10px;
  margin: 0 30px 30px 0;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100px;
    height: 150px;
  }
`;

const Info = styled.div`
  padding: 10px 0 0 10px;

  h1 {
    color: rgb(92, 114, 138);
    font-size: 1rem;
    font-weight: 500;
  }

  h2 {
    color: rgb(146, 153, 161);
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;
