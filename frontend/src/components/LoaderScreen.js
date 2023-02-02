import styled from "styled-components";
import { Circles } from "react-loader-spinner";

export default function LoaderScreen() {
  return (
    <Screen>
      <Circles
        height="200"
        width="200"
        color="#8D949E"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Screen>
  );
}

const Screen = styled.div`
  width: 100vw;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
