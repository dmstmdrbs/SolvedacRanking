import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: darkMode;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  cursor: pointer;
  div {
    border-radius: 100%;
    border: 1px solid;
    max-width: 4vw;
    max-height: 4vw;
    padding: 1vmin;
    align-items: center;
    :hover {
      opacity: 50%;
    }
  }
`;

export { Container };
