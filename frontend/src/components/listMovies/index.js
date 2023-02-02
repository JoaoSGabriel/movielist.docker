import styled from "styled-components";
import Home from "../HomeStyle";
import PlanningMovies from "./PlanningMovies";
import SideBar from "./sideBar";
import WatchedMovies from "./WatchedMovies";

export default function ListMoviesPage() {
  return (
    <Home>
      <Content>
        <SideBar />
        <Movies>
          <PlanningMovies />
          <WatchedMovies />
        </Movies>
      </Content>
    </Home>
  );
}

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1366px) {
    max-width: 1100px;
  }
`;

const Movies = styled.div`
  width: 79%;
`;
