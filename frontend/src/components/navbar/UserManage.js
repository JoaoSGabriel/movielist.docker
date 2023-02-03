import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineGithub } from "react-icons/ai";
import { RiUserSearchFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import UserContext from "../contexts/UserContext";

export default function UserManage({ searching, setSearching }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { profileData } = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);

  function logout() {
    localStorage.clear("userData");
    localStorage.clear("profileData");
    window.location.reload();
    navigate("/");
  }

  function getImage() {
    if (profileData?.photo_path) {
      return profileData.photo_path;
    } else {
      return "https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg";
    }
  }

  return (
    <Div>
      <a
        href="https://github.com/JoaoSGabriel/movielist.docker"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub className="icon" />
      </a>
      <RiUserSearchFill
        className="icon"
        onClick={() => {
          setSearching(!searching);
        }}
      />
      <Wrapper
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <img src={getImage()} alt="profileImg"></img>
        <ToggleArrow isActive={isActive}>
          <IoIosArrowDown />
        </ToggleArrow>
        <ButtonWrapper ref={dropdownRef} isActive={isActive}>
          <span onClick={logout}>
            <ImExit style={{ margin: "0 10px" }} /> logout
          </span>
          <span
            onClick={() => {
              navigate(`/profile/${profileData.username}`);
            }}
          >
            <IoPersonOutline style={{ margin: "0 10px" }} /> Perfil
          </span>
        </ButtonWrapper>
      </Wrapper>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin: 0 20px 0 0;
    font-size: 1.7rem;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
      filter: brightness(2);
    }
  }
`;

const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bcbedc;
  cursor: pointer;
  position: relative;

  img {
    width: 53px;
    height: 53px;
    margin: 0 20px 0 0;
  }

  @media screen and (max-width: 1366px) {
    img {
      width: 43px;
      height: 43px;
      margin: 0 15px 0 0;
    }
  }
`;

const ToggleArrow = styled.div`
  font-size: 20px;
  transform: ${(props) =>
    props.isActive ? "rotate(-180deg)" : "rotate(0deg)"};
  transition: all 0.5s ease;
`;

const ButtonWrapper = styled.div`
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  //Size
  width: 140px;
  height: auto;
  border-radius: 6px;

  //inside Org
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 1;

  //color
  background: rgb(251, 251, 251);
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.25),
    0 4px 4px rgba(103, 132, 187, 0.15);

  //effects
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-3px);"};

  span {
    width: 80%;
    display: flex;
    align-items: center;
    margin: 8px 0;
    color: rgb(64, 78, 92);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.03rem;

    :hover {
      transform: scale(1.1);
      filter: brightness(2);
    }
  }
`;
