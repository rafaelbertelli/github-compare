import React from "react";
import PropTypes from "prop-types";
import { Container, Repository } from "./styles";

const CompareList = ({ repos }) => (
  <Container>
    {repos.map(
      repo =>
        console.log(repo.html_url) || (
          <Repository key={repo.id}>
            <header>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <strong>{repo.name}</strong>
              <small>{repo.owner.login}</small>
            </header>
            <ul>
              <li>
                {repo.stargazers_count}
                <small> stars</small>
              </li>
              <li>
                {repo.forks_count}
                <small> forks</small>
              </li>
              <li>
                {repo.open_issues_count}
                <small> issues</small>
              </li>
              <li>
                {repo.lastCommit}
                <small> last commit</small>
              </li>
              <li className="buttons">
                <button className="button delete" onClick={() => {}}>
                  <i className="fa fa-trash" />
                </button>
                <button className="button refresh" onClick={() => {}}>
                  <i className="fa fa-refresh fa-pulse" />
                </button>
              </li>
            </ul>
          </Repository>
        )
    )}
  </Container>
);

CompareList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      })
    })
  ).isRequired
};

export default CompareList;
