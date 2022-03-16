import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: manage;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  button {
    font-size: 1rem;
    border: none;
    background-color: white;
    cursor: pointer;
    :hover {
      opacity: 50%;
    }
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10vw;
  min-height: 30vh;
  border: 1px solid;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  .cancel {
    display: none;
    cursor: pointer;
    :hover {
      opacity: 50%;
    }
  }
  :hover .cancel {
    display: block;
  }
`;

export { Container, Modal, Wrapper };
