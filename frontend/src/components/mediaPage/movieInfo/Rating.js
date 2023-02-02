import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import useToken from "../../../hooks/useToken";
import { getRate, postRate, deleteRate } from "../../../services/RatedApi";

import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

export default function Rating({ movieDetails }) {
  const [value, setValue] = useState(0);
  const [rateDetails, setRateDetails] = useState([]);
  const [reload, setReload] = useState(false);

  const token = useToken();

  useEffect(() => {
    if (movieDetails?.id) {
      const promisse = getRate(token, movieDetails?.id);
      promisse
        .then((e) => {
          setRateDetails(e);
        })
        .catch(() => {
          setRateDetails([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, reload]);

  function countStars() {
    let total = 5;
    let stars = rateDetails?.rate / 2;
    const response = [];

    const filled = <ImStarFull />;
    const half = <ImStarHalf />;
    const empty = <ImStarEmpty />;

    while (total > 0) {
      if (stars > 0 && stars < 1) {
        response.push(half);
        stars--;
      } else if (stars > 0) {
        response.push(filled);
        stars--;
      } else if (stars <= 0 && total > 0) {
        response.push(empty);
      }
      total--;
    }
    return response;
  }

  function newRate() {
    if (value === 0) {
      toast("Escolha uma nota entre 0.5 e 10");
      return;
    }

    const body = {
      tmdbMovieId: movieDetails.id,
      rate: value,
    };

    const promisse = postRate(token, body);
    promisse
      .then(() => {
        toast("Nova nota selecionada");
        setReload(!reload);
      })
      .catch(() => {
        toast("Ops! Não foi possível salvar sua nota");
      });
  }

  function delRate() {
    if (!rateDetails?.id) return;
    const promisse = deleteRate(token, rateDetails.id);
    promisse
      .then(() => {
        setReload(!reload);
        toast("Avaliação excluída");
      })
      .catch(() => {
        toast("Ops! Não foi possível salvar sua nota");
      });
  }

  return (
    <>
      {token ? (
        <Wrappler>
          {rateDetails?.id ? (
            <Rate>
              <h3>Sua nota: {rateDetails?.rate}</h3>
              <Stars>{countStars()}</Stars>
              <Button onClick={delRate}>Excluir nota</Button>
            </Rate>
          ) : (
            <>
              <h3>Escolha sua nota: {value}</h3>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={newRate}>Escolher</Button>
            </>
          )}
        </Wrappler>
      ) : (
        <></>
      )}
    </>
  );
}

const Wrappler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 70px;

  h3 {
    width: 100%;
    text-align: start;
  }

  input {
    width: 200px;
    height: 10px;
    margin: 10px 0 10px 0;
    background: #e0e0de;
    border-radius: 50px;
    outline: none;
    transition: 0.3s;
    -webkit-appearance: none;

    ::-webkit-slider-thumb {
      appearance: none;
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      background: #f7c50c;
      cursor: pointer;
    }

    ::-moz-range-thumb {
      width: 30px;
      height: 10px;
      background: #4caf50;
      cursor: pointer;
    }
  }
`;

const Button = styled.div`
  width: 100px;
  height: 25px;
  border-radius: 3px;
  margin: 5px 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 153, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const Stars = styled.div`
  font-size: 1.5rem;
  color: #f7c50c;

  margin: 5px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rate = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
  }
`;
