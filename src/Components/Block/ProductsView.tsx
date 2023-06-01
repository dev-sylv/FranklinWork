import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import shoe1 from "../../Assets/bwShoes-removebg-preview.png";
import shoe2 from "../../Assets/fineShoes-removebg-preview.png";
import shoe3 from "../../Assets/pairShoes-removebg-preview.png";
import shoe4 from "../../Assets/pureWhite-removebg-preview.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductsView = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const onToggled = () => {
    setToggle(!toggle);
  };
  let data: any = [
    {
      images: shoe1,
      text: "$500.00",
    },
    {
      images: shoe2,
      text: "$400.00",
    },
    {
      images: shoe3,
      text: "$300.00",
    },
    {
      images: shoe4,
      text: "$210.00",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <TopDiv>
            <BigText>
              Our <span style={{ color: "red" }}>Popular</span> Products
            </BigText>
            <SmallText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              eveniet!
            </SmallText>
          </TopDiv>
          <BottomDiv>
            <Directions>
              <Icon />
              <Icon1 />
            </Directions>
            <ParentHolder>
              {data.map((el: any) => (
                <Holdings>
                  <Box>
                    <Img src={el.images} />
                  </Box>{" "}
                  <H>
                    {toggle ? (
                      <Icon2 onClick={onToggled} />
                    ) : (
                      <Icon3 onClick={onToggled} />
                    )}
                    <span style={{ color: "red", fontWeight: "700" }}>
                      likee
                    </span>
                  </H>
                  <TextBig>Lorem ipsum dolor sit amet consectetur.</TextBig>
                  <TextSmall>{el.text}</TextSmall>
                </Holdings>
              ))}
            </ParentHolder>
          </BottomDiv>
        </Main>
      </Container>
    </div>
  );
};

export default ProductsView;

const H = styled.div`
  display: flex;
  align-items: center;
`;

const TextBig = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 200px;
  color: grey;
  margin-bottom: 5px;
`;

const TextSmall = styled.div`
  color: red;
  font-weight: 700;
  font-size: 15px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holdings = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled(FaRegHandPointRight)`
  margin-left: 10px;

  :hover {
    transform: translate(0, -3px);
  }
`;

const Icon1 = styled(FaRegHandPointLeft)`
  margin-left: 10px;
  :hover {
    transform: translate(0, -3px);
  }
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TopDiv = styled.div``;

const BigText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const SmallText = styled.div`
  font-size: 20px;
  color: grey;
  font-weight: 500;
  width: 450px;
`;

const BottomDiv = styled.div``;

const Directions = styled.div`
  display: flex;
  justify-content: flex-end;
  color: grey;
`;

const ParentHolder = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Box = styled.div`
  width: 250px;
  height: 70%;
  border-radius: 20px;
  background-color: rgba(225, 225, 225, 4);
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`;

const Img = styled.img`
  width: 270px;
  height: 200px;
`;

const Icon2 = styled(AiOutlineStar)`
  color: red;
  margin: 10px 5px;
  cursor: pointer;
`;
const Icon3 = styled(AiFillStar)`
  color: red;
  margin: 10px 5px;
  cursor: pointer;
`;
