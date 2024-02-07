import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    background-color: #00000445;
  }
`;

export const SmileIcon = styled.div`
  font-size: 100px;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  border-radius: 10px;
  background-color: #00000445;
  color: white;
  font-size: 20px;
  font-weight: 900;
`;
