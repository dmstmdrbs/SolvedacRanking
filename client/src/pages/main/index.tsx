import Profile from "@components/profile";
import ManageBoard from "@components/manageBoard";
import DarkModeBtn from "@components/button/dark";
import { useQueries } from "react-query";
import { fetchUserProfile } from "../../utils/api";
import { Container, Columns, ColumnText, Wrapper, Logo } from "./styles";
import { useState } from "react";

const Main = () => {
  const [memberList, setMemberList] = useState([
    "maxcha98",
    "dre12am14",
    "tjdqls1668",
    "tph00300",
    "dmstmdrbs",
    "jmkabc31",
    "kevindec18",
  ]);
  const userQueries = useQueries(
    memberList.map((handle) => ({ queryKey: ["user", handle], queryFn: () => fetchUserProfile(handle) }))
  ).sort((a, b) => (!a.isLoading && !b.isLoading ? b.data.maxStreak - a.data.maxStreak : 0));

  const handleAddMember = (member: string) => setMemberList([...memberList, member]);
  const handleCancelMember = (member: string) => setMemberList(memberList.filter((element) => element !== member));

  return (
    <Container>
      <Logo>AJOU</Logo>
      <Wrapper>
        <Columns>
          <ColumnText>프로필</ColumnText>
          <ColumnText>닉네임</ColumnText>
          <ColumnText>랭킹</ColumnText>
          <ColumnText>스트릭</ColumnText>
        </Columns>
        {userQueries.map(({ isLoading, data }, idx) =>
          isLoading ? (
            <div key={idx}>
              <h1>Loading...</h1>
            </div>
          ) : (
            <div key={data?.handle}>{data !== undefined && <Profile {...data} />}</div>
          )
        )}
      </Wrapper>
      <ManageBoard memberList={memberList} handleAddMember={handleAddMember} handleCancelMember={handleCancelMember} />
      <DarkModeBtn />
    </Container>
  );
};

export default Main;
