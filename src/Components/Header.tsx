import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
	return (
		<Wrapper>
			<Logo>CodeLab</Logo>
			<Nav>
				<Navigation>Home</Navigation>
				<Navigation>Home</Navigation>
				<Navigation>Home</Navigation>
				<Button>Add</Button>
			</Nav>
		</Wrapper>
	);
};

export default Header;

const Logo = styled.div`
	margin-left: 30px;
	font-size: 20px;
	font-weight: bold;
`;
const Nav = styled.div`
	display: flex;
	margin-right: 20px;
	align-items: center;
`;
const Navigation = styled.div`
	margin-right: 10px;
	margin-left: 10px;
`;
const Button = styled.button`
	height: 40px;
	width: 150px;
`;

const Wrapper = styled.div`
	height: 70px;
	width: 100%;
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
