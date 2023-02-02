import { useEffect, useState } from "react";
import {
  deleteMovieWatched,
  postMovieWatched,
  searchMovieWatched,
} from "../../../services/WatchedApi";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

export default function WatchedButton({ movieDetails, token }) {
  const [watched, setWatched] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!token) return;

    if (movieDetails?.id) {
      const promisse = searchMovieWatched(token, movieDetails.id);
      promisse
        .then((e) => {
          setWatched(e);
        })
        .catch(() => {
          setWatched([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, reload]);

  function movieSeeing() {
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

    const promisse = postMovieWatched(token, body);
    promisse
      .then(() => {
        toast("Marcado como visto");
        setReload(!reload);
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
      });
  }

  function movieUnseen() {
    if (!token) {
      return toast("É necessário fazer login para isso");
    }

    const promisse = deleteMovieWatched(token, watched.id);
    promisse
      .then(() => {
        toast("Retirado dos filmes assistidos");
        setReload(!reload);
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
      });
  }

  return (
    <>
      {watched?.id ? (
        <span onClick={movieUnseen}>
          {"Assistido"}
          <FaEye style={{ margin: "0 0 0 5px" }} />
        </span>
      ) : (
        <span onClick={movieSeeing}>Ja assisti</span>
      )}
    </>
  );
}
