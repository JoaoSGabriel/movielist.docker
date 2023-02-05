import styled from "styled-components";

export default function Loader({ style }) {
  return (
    <Wrappler style={style}>
      <Container>
        <div></div>
        <p></p>
      </Container>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 0 0 20px 0;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  div {
    width: 210px;
    height: 315px;
    border-radius: 4px;
    background: #8d949e;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 0.9s shine linear infinite;
  }

  p {
    width: 210px;
    height: 21px;
    margin-top: 15px;
    background: #8d949e;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  @media screen and (max-width: 1366px) {
    div {
      width: 160px;
      height: 240px;
    }

    p {
      width: 160px;
    }
  }
`;
