import styled from "styled-components";
import Button from "../Static/Button";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder1>
            <Logo>Logo</Logo>
          </Holder1>
          <Holder2>
            <Navs>Home</Navs>
            <Navs>About us</Navs>
            <Navs>Services</Navs>
            <Navs>Contact us</Navs>
          </Holder2>
          <Holder3>
            <Button title="Sign in" /> /
            <Button title="Explore now" />
          </Holder3>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  color: grey;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(245, 246, 247, 1) 50%
  );
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Holder1 = styled.div``;

const Holder2 = styled.div`
  display: flex;
`;
const Holder3 = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const Logo = styled.div``;

const Navs = styled.div`
  margin: 0 20px;
`;
