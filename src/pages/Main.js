import React from "react";
import logo from "../assets/logo.png";
import { Container, Form } from "../styles/main";

const Main = () => {
  return (
    <Container>
      <img src={logo} alt="App logo" />

      <Form onClick={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="usuário/repositório"
          value=""
          onChange={() => {}}
        />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
};

export default Main;
