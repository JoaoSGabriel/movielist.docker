import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 40px 0 0 0;

  @media screen and (max-width: 1366px) {
    max-width: 1100px;
    margin: 30px 0 0 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Text = styled.div`
  width: 100%;
  margin: 0 0 15px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #516170;

  h1 {
    text-transform: uppercase;
  }

  h2 {
    font-size: 15px;
    cursor: pointer;

    :hover {
      color: rgb(61, 180, 242);
    }
  }
`;
