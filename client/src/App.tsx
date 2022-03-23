import Main from "@pages/main/index";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
`;
function App() {
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", (e) => {
      console.log(e);
      if (e.matches) {
        window.document.body.classList.add("dark");
      } else {
        window.document.body.classList.remove("dark");
      }
    });
  });
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
