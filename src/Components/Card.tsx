import React from "react";
import styled from "styled-components";

interface Iprops {
	title: string;
}

const Card: React.FC<Iprops> = ({ title }) => {
	return (
		<Container>
			<CardHold>
				<Title>{title}</Title>
				<Content>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
					praesentium quis sint illo alias ut laboriosam unde{" "}
				</Content>
			</CardHold>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: 100%;
`;

const CardHold = styled.div`
	height: 200px;
	width: 250px;
	border: 1px solid gray;
	margin-top: 100px;
	margin-left: 20px;
	padding: 10px;
`;
const Title = styled.h3``;
const Content = styled.p``;
