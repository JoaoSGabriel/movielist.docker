import styled from "styled-components";
import useToken from "../../hooks/useToken";
import AuthManage from "./AuthManage";
import UserManage from "./UserManage";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  const token = useToken();

  return (
    <Container>
      <Wrappler>
        <Logo />
        <Nav />
        {token ? <UserManage /> : <AuthManage />}
      </Wrappler>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 75px;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: #2b2d42;
  color: #bcbedc;

  @media screen and (max-width: 1366px) {
    height: 65px;
  }
`;

const Wrappler = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1440px;
  width: 100%;

  @media screen and (max-width: 1366px) {
    max-width: 1100px;
  }
`;
