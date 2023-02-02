import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Rating from "./Rating";

export default function MovieInfo({ movieDetails }) {
  return (
    <Information>
      <h1>{movieDetails.title}</h1>
      {movieDetails.tagline ? <h3>"{movieDetails.tagline}"</h3> : <></>}
      <h2>{movieDetails.overview}</h2>
      <RatingArea>
        <div>
          <h3>IMDB: Pontuação</h3>
          <ProgressBar completed={movieDetails.vote_average} />
        </div>
        <Rating movieDetails={movieDetails} />
      </RatingArea>
    </Information>
  );
}

const Information = styled.div`
  width: 1075px;
  min-height: 260px;
  padding: 0 0 10px 0;
  margin: 10px 0 0 30px;

  h1 {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(93, 114, 138);
  }

  h2 {
    color: rgb(122, 133, 143);
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    max-width: 900px;
    padding: 15px 0;
    transition: 0.2s;
  }

  h3 {
    color: rgb(122, 133, 143);
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    max-width: 900px;
    padding: 15px 0 0 0;
    transition: 0.2s;
  }

  @media screen and (max-width: 1366px) {
    max-width: 950px;
  }
`;

const RatingArea = styled.div`
  width: 100%;
  display: flex;
`;
