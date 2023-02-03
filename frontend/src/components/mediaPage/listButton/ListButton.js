import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import PlanningButton from "./PlanningButton";
import WatchedButton from "./WatchedButton";

export default function ListButton({ movieDetails, token }) {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  return (
    <Wrappler
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      Listar
      <Menu>
        <ToggleArrow isActive={isActive}>
          <IoIosArrowDown />
        </ToggleArrow>
        <MenuDropDown ref={dropdownRef} isActive={isActive}>
          <WatchedButton movieDetails={movieDetails} token={token} />
          <p></p>
          <PlanningButton movieDetails={movieDetails} token={token} />
        </MenuDropDown>
      </Menu>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  width: 120px;
  height: 35px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 240px;
  left: calc(-215px);
  background: rgb(0, 153, 0);
  border-radius: 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const Menu = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ToggleArrow = styled.div`
  font-size: 20px;
  transform: ${(props) =>
    props.isActive ? "rotate(-180deg)" : "rotate(0deg)"};
  transition: all 0.5s ease;
`;

const MenuDropDown = styled.div`
  width: 120px;
  padding: 10px 0;
  background: rgb(0, 153, 0);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40px;
  right: -20px;
  z-index: 1;

  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-3px);"};

  span {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 0.9rem;
    letter-spacing: 0.03rem;

    :hover {
      transform: scale(1.1);
    }
  }

  p {
    width: 80%;
    border-bottom: 1px solid #bcbedc;
  }
`;
