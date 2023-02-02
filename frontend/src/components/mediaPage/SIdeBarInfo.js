import styled from "styled-components";

export default function SideBarInfo({ movieDetails }) {
  function convertDate(object) {
    if (movieDetails?.release_date) {
      return object.split("-").reverse().join("/");
    }
  }

  function revenue(value) {
    if (value !== undefined) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
  }

  function genres(object) {
    if (movieDetails?.genres) {
      return object.map((value, index) => <h2 key={index}>{value.name}</h2>);
    }
  }

  function production(object) {
    if (movieDetails?.production_companies) {
      return object.map((value, index) => <h2 key={index}>{value.name}</h2>);
    }
  }

  return (
    <>
      <Wrappler>
        <h1>Status</h1>
        <h2>{movieDetails.status}</h2>
        <h1>Data de lançamento</h1>
        <h2>{convertDate(movieDetails.release_date)}</h2>
        <h1>Orçamento: USD</h1>
        <h2>{revenue(movieDetails.budget)}</h2>
        <h1>Receita gerada: USD</h1>
        <h2>{revenue(movieDetails.revenue)}</h2>
        <h1>Gêneros:</h1>
        {genres(movieDetails.genres)}
        <h1>Produtores:</h1>
        {production(movieDetails.production_companies)}
        <h1>English</h1>
        <h2>{movieDetails.original_title}</h2>
      </Wrappler>
    </>
  );
}

const Wrappler = styled.div`
  width: 215px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  margin: 30px 0 0 0;
  padding: 0 0 20px 15px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  h1 {
    color: rgb(92, 114, 138);
    font-size: 1rem;
    font-weight: 500;
    margin: 20px 0 0 0;
    padding: 0 0 5px 0;
  }

  h2 {
    color: rgb(146, 153, 161);
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;
