import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Buttons from "./Buttons";

export default function MediaCard({ info, style, buttons }) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  function contentImage() {
    if (info?.tmbdPoster_path) {
      return info.tmbdPoster_path;
    }

    if (info?.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
    }

    return "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
  }

  function seeMore() {
    if (info.tmdbMovieId) {
      navigate(`/movie/${info.tmdbMovieId}`);
    } else {
      navigate(`/movie/${info.id}`);
    }
  }

  return (
    <>
      {buttons ? (
        <Container
          style={style}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <Buttons isActive={isActive} info={info} />
          <img src={contentImage()} alt="loaded Banner" onClick={seeMore} />
          {info?.tmdbTitle ? (
            <h1>{info?.tmdbTitle}</h1>
          ) : (
            <h1>{info?.title}</h1>
          )}
        </Container>
      ) : (
        <Container style={style}>
          <img src={contentImage()} alt="loaded Banner" onClick={seeMore} />
          {info?.tmdbTitle ? (
            <h1>{info?.tmdbTitle}</h1>
          ) : (
            <h1>{info?.title}</h1>
          )}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  margin: 0 0 0px 0;
  background: none;
  position: relative;

  img {
    width: 210px;
    height: 315px;
    border-radius: 4px;
    cursor: pointer;
  }
  h1 {
    width: 210px;
    color: rgb(116, 136, 153);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 21px;
    margin-top: 10px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  @media screen and (max-width: 1366px) {
    img {
      width: 160px;
      height: 240px;
    }

    h1 {
      width: 160px;
    }
  }
`;
