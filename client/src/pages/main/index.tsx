import Profile from "@components/profile";
import ManageBoard from "@components/manageBoard";
import { useQuery, useQueries } from "react-query";
import { IUser } from "@constants/index";
import { fetchUserProfile } from "../../utils/api";
import { Container, Columns, ColumnText, Wrapper, Logo } from "./styles";
import { useEffect, useState } from "react";

const Main = () => {
	const [memberList, setMemberList] = useState([
		"maxcha98",
		"dre12am14",
		"tjdqls1668",
		"tph00300",
	]);
	const userQueries = useQueries(
		memberList.map((handle) => {
			return {
				queryKey: ["user", handle],
				queryFn: () => fetchUserProfile(handle),
			};
		})
	);
	const handleAddMember = (member: string) =>
		setMemberList([...memberList, member]);

	return (
		<Container>
			<Logo>AJOU</Logo>

			<Wrapper>
				<Columns>
					<ColumnText>프로필</ColumnText>
					<ColumnText>닉네임</ColumnText>
					<ColumnText>점수</ColumnText>
					<ColumnText>스트릭</ColumnText>
				</Columns>
				{userQueries.map(({ isLoading, data }, idx) =>
					isLoading ? (
						<div key={idx}>
							<h1>Loading...</h1>
						</div>
					) : (
						<div key={data?.handle}>
							{data !== undefined && <Profile {...data} />}
						</div>
					)
				)}
			</Wrapper>
			<ManageBoard memberList={memberList} handleAddMember={handleAddMember} />
		</Container>
	);
};

export default Main;
