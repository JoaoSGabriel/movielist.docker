import { useContext, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function UserArea({ info, setIsEditing, username }) {
  const [isActive, setIsActive] = useState(false);
  const { profileData } = useContext(UserContext);

  function showEditButton(type) {
    if (username !== profileData.username) return;
    if (type === "turnon") setIsActive(true);
    if (type === "turnof") setIsActive(false);
  }

  function getImage() {
    if (info?.photo_path) {
      return info.photo_path;
    }

    return "https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg";
  }
  return (
    <Background url={info?.backdrop_path}>
      <Profile
        onMouseEnter={() => {
          showEditButton("turnon");
        }}
        onMouseLeave={() => {
          showEditButton("turnof");
        }}
      >
        <img src={getImage()} alt="profile'" />
        <EditButton
          isActive={isActive}
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <AiOutlineEdit
            style={{ color: "rgb(255, 255, 255)", fontSize: "1.3rem" }}
          />
        </EditButton>
        <Name>{info?.username}</Name>
      </Profile>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.url ? `url(${props.url})` : "#2b2d42")};
  background-size: cover;
  background-position: 50% 35%;
`;

const Profile = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 400px;
  position: relative;

  img {
    width: 260px;
    height: 260px;
    size: cover;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  @media screen and (max-width: 1366px) {
    max-width: 1100px;

    img {
      width: 240px;
      height: 240px;
    }
  }
`;

const EditButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: rgba(31, 38, 49, 0.9);
  box-shadow: 0 0 5px 2px rgb(45 45 45 / 35%);

  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-3px);"};
`;

const Name = styled.div`
  position: absolute;
  bottom: 20px;
  left: 280px;
  padding: 10px;
  border-radius: 5px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.7);
`;
