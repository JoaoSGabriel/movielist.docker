import { useState } from "react";
import styled from "styled-components";

export default function Crew({ info }) {
  const onlySix = info.slice(0, 6);

  const [render, setRender] = useState(onlySix);
  const [isActive, setIsActive] = useState(false);

  function seeInfo() {
    setRender(info);
    setIsActive(true);
  }

  function hiddenInfo() {
    setRender(onlySix);
    setIsActive(false);
  }

  return (
    <>
      <Header>
        <h1>Equipe Técnica:</h1>
        {isActive ? (
          <span onClick={hiddenInfo}>Esconder</span>
        ) : (
          <span onClick={seeInfo}>Ver todos</span>
        )}
      </Header>
      <Wrappler>
        {render.map((value, index) => (
          <CrewCard key={index}>
            {value.profile_path ? (
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.profile_path}
                alt="poster"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt="no data"
              />
            )}
            <CrewInfo>
              <h1>{value.name}</h1>
              <h2>Departamento: {value.department}</h2>
              <h2>Emprego: {value.job}</h2>
            </CrewInfo>
          </CrewCard>
        ))}
      </Wrappler>
    </>
  );
}

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: rgb(92, 114, 138);
    font-size: 1rem;
    font-weight: 500;
    margin: 0 55px 10px 0;
    cursor: pointer;

    :hover {
      color: rgb(61, 180, 242);
    }
  }

  @media screen and (max-width: 1366px) {
    span {
      margin: 0 35px 10px 0;
    }
  }
`;

const Wrappler = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const CrewCard = styled.div`
  width: 320px;
  height: auto;
  background-color: #fafafa;
  margin: 0 30px 30px 0;
  display: flex;

  img {
    width: 100px;
    border-radius: 5px;
  }

  @media screen and (max-width: 1366px) {
    max-width: 290px;
    margin: 0 25px 25px 0;

    img {
      width: 80px;
    }
  }
`;

const CrewInfo = styled.div`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(146, 153, 161);

  h2 {
    margin: 0 0 10px 0;
    color: rgb(146, 153, 161);
  }
`;
