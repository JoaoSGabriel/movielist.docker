import { useEffect, useState } from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  deleteMoviePlanning,
  postMoviePlanning,
  searchMoviePlanning,
} from "../../../services/PlanningApi";

export default function PlanningButton({ movieDetails, token }) {
  const [planning, setPlanning] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!token) return;

    if (movieDetails?.id) {
      const promisse = searchMoviePlanning(token, movieDetails.id);
      promisse
        .then((e) => {
          setPlanning(e);
        })
        .catch(() => {
          setPlanning([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, reload]);

  function planningSee() {
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

    const promisse = postMoviePlanning(token, body);
    promisse
      .then(() => {
        toast("Marcado como planejado");
        setReload(!reload);
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
      });
  }

  function dismissPlanning() {
    if (!token) {
      return toast("É necessário fazer login para isso");
    }

    const promisse = deleteMoviePlanning(token, planning.id);
    promisse
      .then(() => {
        toast("Retirado dos filmes planejados");
        setReload(!reload);
      })
      .catch(() => {
        toast("Ops, algo deu errado com sua requisição");
      });
  }

  return (
    <>
      {planning?.id ? (
        <span onClick={dismissPlanning}>
          {"Planejado"}
          <BsFillCalendarCheckFill style={{ margin: "0 0 0 5px" }} />
        </span>
      ) : (
        <span onClick={planningSee}>Pretendo ver</span>
      )}
    </>
  );
}
