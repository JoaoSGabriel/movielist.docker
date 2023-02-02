import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Home from "../HomeStyle";
import useGetDetailsMovie from "../../hooks/apiUtils/useGetDetailsMovie";
import MovieInfo from "./movieInfo/index";
import SideBarInfo from "./SIdeBarInfo";
import MovieContent from "./movieContent";
import LoaderScreen from "../LoaderScreen";
import ListButton from "./listButton/ListButton";
import LikeButton from "./likeButton/LikeButton";
import useToken from "../../hooks/useToken";

export default function MediaPage() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieBanner, setMovieBanner] = useState("");
  const [moviePoster, setMoviePoster] = useState("");

  const params = useParams();
  const token = useToken();

  const { detailsLoading, getDetails } = useGetDetailsMovie();

  useEffect(() => {
    const promisse = getDetails(params.movieId);
    promisse.then((p) => {
      setMovieDetails(p);

      if (p?.backdrop_path) {
        setMovieBanner(
          "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" +
            p.backdrop_path
        );
      } else {
        setMovieBanner(
          "https://img.freepik.com/free-photo/gray-wall-empty-room-with-concrete-floor_53876-88447.jpg?w=2000"
        );
      }

      if (p?.poster_path) {
        setMoviePoster("https://image.tmdb.org/t/p/w1280" + p.poster_path);
      } else {
        setMoviePoster(
          "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      {detailsLoading ? (
        <LoaderScreen />
      ) : (
        <>
          <Background>
            <Image imageUrl={movieBanner}></Image>
          </Background>
          <Home>
            <BackgroundColor>
              <Details>
                <Banner>
                  <img src={moviePoster} alt="movie Poster" />
                  <ListButton movieDetails={movieDetails} token={token} />
                  <LikeButton movieDetails={movieDetails} token={token} />
                </Banner>
                <MovieInfo movieDetails={movieDetails} />
              </Details>
            </BackgroundColor>
            <Details>
              <SideBarInfo movieDetails={movieDetails} />
              <MovieContent movieDetails={movieDetails} />
            </Details>
          </Home>
        </>
      )}
    </>
  );
}

const Background = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(
    180deg,
    rgba(6, 13, 34, 0) 40%,
    rgba(6, 13, 34, 0.6)
  );
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: 50% 35%;
`;

const BackgroundColor = styled.div`
  width: 100%;
  min-height: 290px;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const Details = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 1440px;

  @media screen and (max-width: 1366px) {
    max-width: 1300px;
  }
`;

const Banner = styled.div`
  border-radius: 2px;
  box-shadow: 0 0 29px rgb(49 54 68 / 25%);
  position: relative;

  img {
    width: 215px;
    height: 322px;
    position: absolute;
    top: -100px;
    right: 0;
  }
`;
