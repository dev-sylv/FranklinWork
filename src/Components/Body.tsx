import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";
const Body: React.FC = () => {
	return (
		<Container>
			<Card title='hello world' />
			<Card title='Nigeria' />
		</Container>
	);
};

export default Body;

const Container = styled.div`
	display: flex;
	/* height: 100vh;
	width: 100%;
	flex-wrap: wrap; */
`;
