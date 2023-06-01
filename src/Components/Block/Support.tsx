import React, { useState } from "react";
import styled from "styled-components";
import sneaker from "../../Assets/sneaker1-removebg-preview.png";
import RedI from "../../Assets/redSneaks-removebg-preview.png";
import YellowI from "../../Assets/yellowSneaks-removebg-preview.png";

interface Ishoe {
  shoe: string;
}

const Support: React.FC<Ishoe> = ({ shoe }) => {
  const [changeShoe1, setChangeShoe1] = useState("");

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

  const FilterShoes = (id: any) => {
    let value = nData.filter((el) => el.id === id).map((el) => el.images);
    setChangeShoe1(value.toString());
  };
  console.log("value", changeShoe1);

  return (
    <div>
      <Container>
        <Main>
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
                  FilterShoes(el.id);
                }}>
                <Img src={el.images} />
              </Box>
            ))}
          </NewScale>
        </Main>
      </Container>
    </div>
  );
};

export default Support;

const Container = styled.div`
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

const Main = styled.div`
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
