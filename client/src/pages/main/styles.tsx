import styled from "@emotion/styled";

const Container = styled.div`
	display: grid;
	grid-template:
		". logo manage" 1fr
		".  profile manage" 1fr
		".  . ." 1fr
		/1fr 1fr 1fr;
`;

const Wrapper = styled.div`
	text-align: -webkit-center;
	grid-area: profile;
	width: 40vw;
	height: 60vh;
	overflow-y: auto;
`;
const Logo = styled.h1`
	text-align: center;
	grid-area: logo;
`;
const Columns = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border: 1px solid black;
	background: rgb(28, 98, 204);
	color: #e4e4e4;
`;
const ColumnText = styled.span`
	font-weight: 600;
	font-size: 18px;
	padding: 10px 3px;
	flex: 1;
`;
export { Wrapper, Logo, Container, Columns, ColumnText };
