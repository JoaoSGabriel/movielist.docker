import { useEffect, useState } from "react";
import { ImHeart } from "react-icons/im";
import { toast } from "react-toastify";
import styled from "styled-components";

import {
  deleteMovieFavorit,
  searchMovieFavorit,
  postMovieFavorit,
} from "../../../services/FavoritApi";

export default function LikeButton({ movieDetails, token }) {
  const [isFavorit, setIsFavorit] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!token) return;

    if (movieDetails?.id) {
      const promisse = searchMovieFavorit(token, movieDetails.id);
      promisse
        .then((e) => {
          setIsFavorit(e);
        })
        .catch(() => {
          setIsFavorit([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, reload]);

  function deleteFavoritMovie() {
    const promisse = deleteMovieFavorit(token, isFavorit.id);
    promisse.then(() => {
      toast("Filme deletado dos favoritos!");
      setReload(!reload);
    });
  }

  async function setMovieAsFavorit() {
    if (!token) {
      return toast("É necessário fazer login para isso");
    }

    let src;
    if (movieDetails?.poster_path) {
      src = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
    } else {
      src =
        "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    }

    const body = {
      tmdbTitle: movieDetails.title,
      tmdbMovieId: movieDetails.id,
      tmdbPoster_path: src,
    };

    const promisse = postMovieFavorit(token, body);
    promisse
      .then(() => {
        setReload(!reload);
        toast("Filme adicionado aos favoritos");
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
      });
  }

  return (
    <>
      {isFavorit?.id ? (
        <LikeWrappler isFavorit={isFavorit} onClick={deleteFavoritMovie}>
          <ImHeart />
        </LikeWrappler>
      ) : (
        <LikeWrappler isFavorit={isFavorit} onClick={setMovieAsFavorit}>
          <ImHeart />
        </LikeWrappler>
      )}
    </>
  );
}

const LikeWrappler = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 240px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;

  //transições
  color: ${({ isFavorit }) =>
    isFavorit?.id ? "rgb(255, 255, 255)" : "#2b2d42"};
  background: ${({ isFavorit }) =>
    isFavorit?.id ? "rgb(236, 41, 75)" : "rgb(255, 255, 255)"};
  border: ${({ isFavorit }) => (isFavorit?.id ? "none" : "1px solid #2b2d42")};
`;
