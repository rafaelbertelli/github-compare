import React, { Component } from 'react';

import { getRepo } from '../../services/api';
import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

class Main extends Component {
  state = {
    isLoading: false,
    repoError: false,
    repoInput: 'facebook/react',
    repos: [],
  };

  handleForm = (e) => {
    e.preventDefault();

    const { repoInput, repos } = this.state;

    this.setState({ isLoading: true });

    getRepo(repoInput)
      .then((res) => {
        this.setState({
          repoInput: '',
          repoError: false,
          repos: [...repos, res],
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ repoError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  updateRepo = ({ id, full_name }) => getRepo(full_name)
    .then((res) => {
      const { repos } = this.state;
      const remainers = repos.filter(item => item.id !== id);

      this.setState({ repos: [...remainers, res] });

      return Promise.resolve();
    })
    .catch(Promise.reject);

  deleteRepo = (id) => {
    const { repos } = this.state;
    const remainers = repos.filter(item => item.id !== id);

    this.setState({ repos: remainers });
  };

  render() {
    const {
      repoInput, repos, repoError, isLoading,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="App logo" />

        <Form onSubmit={this.handleForm} withError={repoError}>
          <input
            type="text"
            placeholder="ex: usuário/repositório"
            value={repoInput}
            onChange={e => this.setState({ repoInput: e.target.value })}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList repos={repos} deleteRepo={this.deleteRepo} updateRepo={this.updateRepo} />
      </Container>
    );
  }
}

export default Main;
