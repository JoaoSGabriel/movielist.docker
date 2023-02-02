import styled from "styled-components";
import { SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <SiThemoviedatabase className="icon" />
      MovieList
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  cursor: pointer;

  .icon {
    margin: 0 10px 0 0;
  }
`;
