import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0 0 0;

  @media screen and (max-width: 1366px) {
    width: 1100px;
    margin: 30px 0 0 0;
  }
`;

export const Text = styled.div`
  width: 100%;
  margin: 0 0 15px 0;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #516170;
`;
