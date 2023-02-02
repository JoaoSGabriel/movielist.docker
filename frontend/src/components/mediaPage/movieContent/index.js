import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetMovieCredits from "../../../hooks/apiUtils/useGetMovieCredits";
import LoaderDiv from "../../LoaderDiv";
import Cast from "./Cast";
import Collections from "./Collections";
import Crew from "./Crew";

export default function MovieContent({ movieDetails }) {
  const { getCredits, creditsLoading } = useGetMovieCredits();
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    if (movieDetails.id) {
      const promisse = getCredits(movieDetails.id);
      promisse.then((p) => {
        if (p) {
          setCast(p.cast);
          setCrew(p.crew);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails]);

  return (
    <>
      <Wrappler>
        <Collections collectionDetails={movieDetails.belongs_to_collection} />
        {creditsLoading ? (
          <LoaderDiv />
        ) : (
          <>
            <Cast info={cast} />
            <Crew info={crew} />
          </>
        )}
      </Wrappler>
    </>
  );
}

const Wrappler = styled.div`
  width: 1075px;
  margin: 30px 0 0 30px;

  h1 {
    color: rgb(92, 114, 138);
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 10px 0;
  }

  @media screen and (max-width: 1366px) {
    max-width: 950px;
  }
`;
