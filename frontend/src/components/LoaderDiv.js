import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";

export default function LoaderDiv() {
  return (
    <Container>
      <ThreeCircles
        height="100%"
        width="100%"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#8D949E"
        innerCircleColor="#8D949E"
        middleCircleColor="#8D949E"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
