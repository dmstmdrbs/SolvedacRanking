import styled from "@emotion/styled";

const Container = styled.div`
	border: 1px solid;
	align-items: center;
	display: flex;
	justify-content: space-evenly;
`;
const ProfileImage = styled.img`
	width: 2vw;
	height: 2vw;
`;
const Username = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: black;
	&:hover {
		color: rgb(28, 98, 204);
	}
`;
export { Container, ProfileImage, Username };
