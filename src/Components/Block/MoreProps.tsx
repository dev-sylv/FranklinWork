import React from "react";
import styled from "styled-components";
import { MdSnowshoeing } from "react-icons/md";
import { FaShoePrints } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";

const MoreProps = () => {
  let data: any = [
    {
      vals: <MdSnowshoeing />,
    },
    {
      vals: <FaShoePrints />,
    },
    {
      vals2: <GiConverseShoe />,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          {data.map((el: any) => (
            <ParentDiv>
              <Shoe>{el.vals2}</Shoe>
              <BigText>Lorem, ipsum dolor.</BigText>
              <SmallText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                non!
              </SmallText>
            </ParentDiv>
          ))}
        </Main>
      </Container>
    </div>
  );
};

export default MoreProps;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 350px;
  min-height: 250px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 15px;
  padding: 15px;
`;

const Shoe = styled(MdSnowshoeing)`
  color: white;
  background-color: red;
  border-radius: 50%;
  padding: 20px;
  font-size: 30px;
`;

const BigText = styled.div`
  font-size: 20px;
  color: red;
  font-weight: 700;
`;

const SmallText = styled.div`
  font-size: 18px;
  color: grey;
  font-weight: 700;
`;
