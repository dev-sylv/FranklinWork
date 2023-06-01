import React from "react";
import Button from "../Static/Button";
import styled from "styled-components";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import sneaker from "../../Assets/likeShoes-removebg-preview.png";

const HeroLikes = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSider>
            <Holds>
              <BigTitle>We Provide You</BigTitle>
              <BigTitle>
                <span>Super Quality</span>
              </BigTitle>
              <br />
              <BigTitle>Shoes</BigTitle>
            </Holds>
            <SmallTitle style={{ color: "grey" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              praesentium cupiditate voluptates impedit libero corporis.
              Laboriosam voluptatibus odit neque incidunt earum molestias, fuga
              mollitia quasi dolore ducimus totam a atque.
            </SmallTitle>
            <Div>
              <Button title="Explore" />
              <BsFillArrowUpRightCircleFill style={{ marginLeft: "10px" }} />
            </Div>
          </LeftSider>
          <RightSider>
            <Sneaks src={sneaker} />
          </RightSider>
        </Main>
      </Container>
    </div>
  );
};

export default HeroLikes;

const Holds = styled.div`
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSider = styled.div`
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: pink; */
  width: 700px;
`;

const RightSider = styled.div`
  width: 300px;
  height: 300px;
  background-color: grey;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: red;
  width: 500px;
`;

const BigTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  display: flex;
  align-items: center;
  line-height: 1;
  background-color: white;

  span {
    color: red;
    margin-right: 10px;
  }
`;

const Div = styled.div`
  width: 130px;
  height: 40px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 500;
`;

const Sneaks = styled.img`
  width: 500px;
  height: 500px;
`;
