import React, { useState } from "react";
import Button from "../Static/Button";
import styled from "styled-components";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import sneaker from "../../Assets/sneaker1-removebg-preview.png";
import RedI from "../../Assets/redSneaks-removebg-preview.png";
import YellowI from "../../Assets/yellowSneaks-removebg-preview.png";

const Hero = () => {
  let nData = [
    {
      id: 1,
      images: sneaker,
    },
    {
      id: 2,
      images: YellowI,
    },
    {
      id: 3,
      images: RedI,
    },
  ];

  const [changeSneakers, setChangeSneakers] = useState(sneaker);
  const FilterSneakers = (id: any) => {
    const value = nData.filter((el) => el?.id === id).map((el) => el?.images);
    setChangeSneakers(value.toString());
  };

  let data: any = [
    {
      ex: "1K+",
      sp: "Brands",
    },
    {
      ex: "500+",
      sp: "Shops",
    },
    {
      ex: "250K+",
      sp: "Customers",
    },
  ];

  return (
    <div>
      <Container>
        <Main>
          <LeftSider>
            <SmallTitle>Our Summer Collection</SmallTitle>
            <Holds>
              <BigTitle>The New Arrival</BigTitle>
              <BigTitle>
                <span>Nike</span>Shoes
              </BigTitle>
            </Holds>
            <SmallTitle style={{ color: "grey" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              voluptatibus.
            </SmallTitle>
            <Div>
              <Button title="Shop Now" />
              <BsFillArrowUpRightCircleFill style={{ marginLeft: "10px" }} />
            </Div>
          </LeftSider>
          <RightSider>
            <Sneaks src={changeSneakers} />
          </RightSider>
        </Main>
      </Container>
      <Container1>
        <Main1>
          <Scale>
            {data.map((el: any) => (
              <Nums>
                <Exact>{el.ex}</Exact>
                <Specials>{el.sp}</Specials>
              </Nums>
            ))}
          </Scale>
          <NewScale>
            {nData.map((el: any) => (
              <Box
                onClick={() => {
                  FilterSneakers(el?.id);
                }}>
                <Img src={el.images} />
              </Box>
            ))}
          </NewScale>
        </Main1>
      </Container1>
    </div>
  );
};

export default Hero;

const Scale = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nums = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Main1 = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Exact = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const Specials = styled.div`
  color: grey;
  font-size: 18px;
  font-weight: 500;
`;

const NewScale = styled.div`
  width: 650px;
  height: 220px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 200px;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(225, 225, 225, 4);
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`;

const Img = styled.img`
  width: 270px;
  height: 200px;
`;

const Container1 = styled.div`
  width: 100%;
  height: 40vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 4) 50%,
    rgba(245, 246, 247, 4) 50%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holds = styled.div`
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 4) 50%,
    rgba(245, 246, 247, 4) 50%
  );
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSider = styled.div`
  height: 320px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: pink; */
  width: 700px;
`;

const RightSider = styled.div``;

const SmallTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: red;
  width: 500px;
`;

const BigTitle = styled.div`
  font-size: 65px;
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
  width: 620px;
  height: 500px;
`;
