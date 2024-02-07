import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const SmilesStyled = styled.div`
  width: 650px;
  height: 400px;
  background-color: #00000045;
  display: flex;
  flex-wrap: wrap;
  border-radius: 40px;
  padding: 30px;
  margin-bottom: 10px;
`;

export const ButtonStyled = styled.button`
  width: 650px;
  padding: 30px;
  border-radius: 40px;
  cursor: pointer;
  font-size: 30px;
`;
export const Winner = styled.button`
  margin: 10px;
  width: 650px;
  border-radius: 40px;
  background-color: #00000445;
  h2 {
    font-size: 30px;
  }
  div {
    p {
      font-size: 70px;
    }
    span {
      font-size: 40px;
    }
  }
`;
