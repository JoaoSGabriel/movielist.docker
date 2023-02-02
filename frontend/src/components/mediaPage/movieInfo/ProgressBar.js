import styled from "styled-components";

export default function ProgressBar({ completed }) {
  function seeValue() {
    if (completed < 3) return "#FB1E2F";
    if (completed < 6) return "#FFB20A";
    return "#16d47b";
  }

  return (
    <Wrappler>
      <Container>
        <Filler bckgColor={seeValue()} value={completed}></Filler>
      </Container>
      <Value>{completed?.toFixed(2)}</Value>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 15px 0;
`;

const Container = styled.div`
  height: 10px;
  width: 200px;
  background-color: #e0e0de;
  border-radius: 50px;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => `${props.value * 10}%`};
  background-color: ${(props) => `${props.bckgColor}`};
  border-radius: inherit;
  text-align: right;
`;

const Value = styled.div`
  margin: 0 0 0 8px;
  color: rgb(122, 133, 143);
`;
