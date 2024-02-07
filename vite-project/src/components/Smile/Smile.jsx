import { Container, Count, SmileIcon } from "./styled";

export const Smile = ({ id, name, count, handleClick }) => {
  return (
    <Container onClick={() => handleClick(id)}>
      <SmileIcon>{name}</SmileIcon>
      <Count>{count}</Count>
    </Container>
  );
};
