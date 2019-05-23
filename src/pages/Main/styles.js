import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;

  input {
    background: #fff;
    border: ${props => (props.withError ? "solid 2px #F00" : 0)};
    border-radius: 3px;
    color: #444;
    flex: 1;
    font-size: 18px;
    height: 55px;
    padding: 0 20px;
  }

  button {
    background-color: #63f5b8;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    height: 55px;
    margin-left: 10px;
    padding: 0 20px;
    transition: background-color 0.2s ease-in-out;
    width: 80px;

    &:hover {
      background-color: #52d89f;
    }
  }
`;
