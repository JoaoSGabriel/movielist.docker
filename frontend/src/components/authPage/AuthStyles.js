import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background: rgb(250, 250, 250);
  border-radius: 4px;
  padding: 40px;
  text-align: center;
  margin-top: 60px;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 60px;
    color: rgb(92, 114, 138);
  }

  h2 {
    margin: 60px 0 0 0;
    font-size: 0.9rem;
    color: rgb(146, 153, 161);
    cursor: pointer;

    :hover {
      color: rgb(61, 180, 242);
    }
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
    margin-bottom: 25px;
    padding: 0 15px;
    width: 100%;
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
    background: rgb(61, 180, 242);
    border-radius: 3px;
    border: 0;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 10px;
    padding: 10px 30px;
  }
`;
