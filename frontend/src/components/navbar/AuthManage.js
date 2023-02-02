import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AuthManage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Login
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        Entrar
      </Login>
      <SignupButton
        onClick={() => {
          navigate("/signup");
        }}
      >
        Criar
      </SignupButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
`;

const Login = styled.div`
  margin: 0 20px 0 0;
  display: flex;
  align-items: center;
  transition: all 150ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.08);
    filter: brightness(2);
  }
`;

const SignupButton = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3577ff;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  transition: all 150ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.07);
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;
