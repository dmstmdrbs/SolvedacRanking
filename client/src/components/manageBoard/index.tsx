import { useRef, useState, useEffect } from "react";
import { Container, Modal, Wrapper } from "./styles";

interface Props {
  memberList: string[];
  handleAddMember: (member: string) => void;
  handleCancelMember: (member: string) => void;
}
const ManageBoard = ({ memberList, handleAddMember, handleCancelMember }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [plus, setPlus] = useState(false);
  const [modalOnOff, setModalOnOff] = useState(false);

  const handleClickModal = () => setModalOnOff(!modalOnOff);
  const handleAdd = () => {
    setPlus(true);
  };
  useEffect(() => {
    if (plus) {
      inputRef.current?.focus();
    }
  }, [plus]);

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    e.stopPropagation();
    if (inputRef.current?.value) {
      handleAddMember(inputRef.current.value);
    }
    setModalOnOff(false);
    setPlus(false);
  }
  return (
    <Container>
      <button onClick={handleClickModal}>팀원관리</button>
      {modalOnOff && (
        <Modal>
          {memberList.map((element) => (
            <Wrapper key={element}>
              <p>{element}</p>
              <p className="cancel" onClick={() => handleCancelMember(element)}>
                X
              </p>
            </Wrapper>
          ))}
          {plus && <input ref={inputRef} onBlur={onBlur} />}
          <button onClick={handleAdd}>+</button>
        </Modal>
      )}
    </Container>
  );
};

export default ManageBoard;
