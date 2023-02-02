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
  text-align: start;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #516170;
`;
