import Profile from "@components/profile";
import ManageBoard from "@components/manageBoard";
import { useQueries } from "react-query";
import { fetchUserProfile } from "../../utils/api";
import { Container, Wrapper, Logo } from "./styles";
import { useState } from "react";

const Main = () => {
  const [memberList, setMemberList] = useState(["maxcha98", "dmstmdrbs", "dre12am14", "tjdqls1668", "tph00300"]);
  const handleAddMember = (member: string) => setMemberList([...memberList, member]);
  const handleCancelMember = (member: string) => setMemberList(memberList.filter((v) => v !== member));

  const result = useQueries(
    memberList.map((element) => ({ queryKey: ["user-data", element], queryFn: () => fetchUserProfile(element) }))
  );
  return (
    <Container>
      <Logo>AJOU</Logo>
      <Wrapper>
        {result.map((element, i) => {
          const { isLoading: userDataLoading, data: userData } = element;
          if (userDataLoading)
            return (
              <div key={i}>
                <h1>Loading...</h1>
              </div>
            );
          else if (userData === undefined) return <p>없어</p>;
          else return <Profile {...userData} />;
        })}
      </Wrapper>
      <ManageBoard memberList={memberList} handleAddMember={handleAddMember} handleCancelMember={handleCancelMember} />
    </Container>
  );
};

export default Main;
