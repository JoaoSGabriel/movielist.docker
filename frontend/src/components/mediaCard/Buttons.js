import { useState } from "react";
import styled from "styled-components";

import useToken from "../../hooks/useToken";
import { postMovieWatched } from "../../services/WatchedApi";
import { postMoviePlanning } from "../../services/PlanningApi";

import {
  FaCalendarAlt,
  FaRegCheckCircle,
  FaRegLightbulb,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Buttons({ isActive, info }) {
  const [show, setShow] = useState(false);
  const token = useToken();

  function movieSeeing() {
    if (!token) {
      return toast("É necessário fazer login para isso");
    }

    let src;
    if (info?.poster_path) {
      src = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
    } else {
      src =
        "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    }

    const body = {
      tmdbTitle: info.title,
      tmdbMovieId: info.id,
      tmdbPoster_path: src,
    };

    const promisse = postMovieWatched(token, body);
    promisse
      .then(() => {
        toast("Marcado como visto");
        setShow(false);
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
        setShow(false);
      });
  }

  function planningSee() {
    if (!token) {
      return toast("É necessário fazer login para isso");
    }

    let src;
    if (info?.poster_path) {
      src = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
    } else {
      src =
        "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    }

    const body = {
      tmdbTitle: info.title,
      tmdbMovieId: info.id,
      tmdbPoster_path: src,
    };

    const promisse = postMoviePlanning(token, body);
    promisse
      .then(() => {
        toast("Marcado como planejado");
        setShow(false);
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
        setShow(false);
      });
  }

  return (
    <Container
      isActive={isActive}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div>
        <FaRegLightbulb />
      </div>
      <div onClick={planningSee}>
        <FaCalendarAlt />
      </div>
      <div onClick={movieSeeing}>
        <FaRegCheckCircle />
      </div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 2;
  cursor: pointer;

  div {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease;

    font-size: 1.3rem;
    color: rgb(255, 255, 255);
    border-radius: 50%;
    background: rgba(31, 38, 49, 0.9);
    box-shadow: 0 0 5px 2px rgb(45 45 45 / 35%);
  }

  div:nth-child(1) {
    position: absolute;
    bottom: 70px;
    right: 10px;

    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
    transform: ${({ isActive }) =>
      isActive ? "translateY(0)" : "translateY(-10px);"};
  }

  div:nth-child(2) {
    position: absolute;
    bottom: 120px;
    right: 10px;

    opacity: ${({ show }) => (show ? "1" : "0")};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-10px);")};
  }

  div:nth-child(3) {
    position: absolute;
    bottom: 170px;
    right: 10px;

    opacity: ${({ show }) => (show ? "1" : "0")};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-10px);")};
  }

  @media screen and (max-width: 1366px) {
    div {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
    div:nth-child(1) {
      bottom: 85px;
    }
    div:nth-child(2) {
      bottom: 125px;
    }
    div:nth-child(3) {
      bottom: 165px;
    }
  }
`;
