import React, { Component } from "react";

import { getRepo } from "../../services/api";
import CompareList from "../../components/CompareList";

import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";

class Main extends Component {
  state = {
    isLoading: false,
    repoError: false,
    repoInput: "facebook/react",
    repos: []
  };

  handleForm = async e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    getRepo(this.state.repoInput)
      .then(res => {
        this.setState({
          repoInput: "",
          repoError: false,
          repos: [...this.state.repos, res]
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ repoError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { repoInput, repos, repoError, isLoading } = this.state;

    return (
      <Container>
        <img src={logo} alt="App logo" />

        <Form onSubmit={this.handleForm} withError={repoError}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repoInput}
            onChange={e => this.setState({ repoInput: e.target.value })}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}
          </button>
        </Form>

        <CompareList repos={repos} />
      </Container>
    );
  }
}

export default Main;
