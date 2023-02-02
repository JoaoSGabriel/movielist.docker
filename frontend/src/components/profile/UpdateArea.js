import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { putProfile } from "../../services/ProfileApi";
import UserContext from "../contexts/UserContext";

export default function UpdateArea({ info, isEditing, setIsEditing, token }) {
  const [username, setUsername] = useState(info?.username);
  const [photo_path, setPhoto_path] = useState(info?.photo_path);
  const [backdrop_path, setBackdrop_path] = useState(info?.backdrop_path);

  const { setProfileData } = useContext(UserContext);
  const navigate = useNavigate();

  function editProfile(e) {
    e.preventDefault();

    if (!token) return;

    const body = {
      username,
      photo_path,
      backdrop_path,
    };

    const promisse = putProfile(token, body);
    promisse
      .then(() => {
        setIsEditing(false);
        toast("Informações alteradas com sucesso");
        setProfileData({ username, photo_path, backdrop_path });
        navigate(`/profile/${username}`);
      })
      .catch(() => {
        toast("Ops! Algo deu errado com sua requisição");
        setIsEditing(false);
      });
  }

  return (
    <>
      {isEditing ? (
        <Container>
          <form onSubmit={editProfile}>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder=" Url da foto de perfil"
              type="text"
              value={photo_path}
              onChange={(e) => setPhoto_path(e.target.value)}
            />
            <input
              placeholder="Url da foto da capa"
              type="text"
              value={backdrop_path}
              onChange={(e) => setBackdrop_path(e.target.value)}
            />
            <button type="onSubmit">Editar</button>
          </form>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 0 0 20px 0;
  background-color: rgb(255, 255, 255);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    background: rgba(237, 241, 245, 0.7);
    border-radius: 4px;
    border: 0;
    color: rgb(92, 114, 138);
    font-size: 1.4rem;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    margin: 10px 0;
    padding: 0 15px;
    width: 95%;
    font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.2rem;

    :focus {
      border: 0 none;
      outline: 0;
    }

    ::placeholder {
      font-weight: 400;
      color: #bcbedc;
    }
  }

  button {
    border: none;
    cursor: pointer;
    background: rgb(61, 180, 242);
    border-radius: 3px;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 600;
    margin-top: 10px;
    padding: 8px 20px;
  }
`;
