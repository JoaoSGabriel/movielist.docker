import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ReactPaginate from "react-paginate";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export default function PageNumber({ path }) {
  const navigate = useNavigate();

  function handlePageClick(event) {
    navigate(`/movies/${path}/${event.selected + 1}`);
  }

  return (
    <Container>
      <ReactPaginate
        nextLabel={<BiRightArrow />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={50}
        previousLabel={<BiLeftArrow />}
        disableInitialCallback={true}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 50px;

  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 30px;
  right: 0px;

  ul.pagination {
    display: flex;
    justify-content: center;
    font-size: 1.2em;
    background-color: rgba(0, 0, 0, 0.5);

    li {
      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: rgb(255, 255, 255);
        padding: 5px;
        cursor: pointer;
        outline: none;
      }

      &.disabled {
        a {
          cursor: not-allowed;
        }
      }

      &.active {
        border: 1px solid white;
      }
    }
  }
`;
