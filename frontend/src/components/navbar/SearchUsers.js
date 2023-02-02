import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useToken from "../../hooks/useToken";
import { getManyProfiles } from "../../services/ProfileApi";

export default function SearchUsers({ setSearching }) {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const token = useToken();
  const navigate = useNavigate();

  function activeSearch(e) {
    e.preventDefault();
    setUsername(e.target.value);
    if (username.length < 1) {
      setUsers([]);
      return;
    }
    if (!token) return;
    const promisse = getManyProfiles(token, username);
    promisse
      .then((e) => {
        setUsers(e);
      })
      .catch(() => {
        setUsers([]);
      });
  }

  const noPhoto =
    "https://www.fatosdesconhecidos.com.br/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg";

  return (
    <MainSearch>
      <input
        placeholder="Pesquise pelo nome do usuário"
        type="text"
        value={username}
        onChange={(e) => activeSearch(e)}
        autoFocus
      />
      <UserInfo>
        {users.map((value, index) => (
          <User
            key={index}
            onClick={() => {
              setUsername("");
              setSearching(false);
              navigate(`/profile/${value.username}`);
            }}
          >
            <img src={value.photo_path || noPhoto} alt="profile" />
            {value.username}
          </User>
        ))}
      </UserInfo>
    </MainSearch>
  );
}

const MainSearch = styled.div`
  position: relative;

  input {
    width: 350px;
    padding: 10px;
    border: none;
    border-radius: 6px;

    background: rgb(251, 251, 251);
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1),
      0 4px 4px rgba(103, 132, 187, 0.04);

    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.02rem;
    text-align: center;
    font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    :focus {
      border: 0 none;
      outline: 0;
    }
  }
`;

const UserInfo = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 2;

  width: 350px;
  border-radius: 6px;

  background-color: rgb(250, 250, 250);
`;

const User = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: rgb(92, 114, 138);

  img {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    margin: 0 15px 0 10px;
  }

  :hover {
    -webkit-box-shadow: 5px 5px 5px #666;
    -moz-box-shadow: 5px 5px 5px #666;
    box-shadow: 5px 5px 5px #666;
  }
`;
