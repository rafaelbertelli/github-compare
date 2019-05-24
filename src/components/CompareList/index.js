import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repos, deleteRepo, updateRepo }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleUpdate = ({ id, full_name }) => {
    setIsRefreshing(true);

    updateRepo({ id, full_name })
      .catch(alert)
      .finally(() => setIsRefreshing(false));
  };

  return (
    <Container>
      {repos.map(repo => (
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
              <button type="button" className="button delete" onClick={() => deleteRepo(repo.id)}>
                <i className="fa fa-trash" />
              </button>
              <button
                type="button"
                className="button refresh"
                onClick={() => handleUpdate({ id: repo.id, full_name: repo.full_name })}
              >
                <i className={`fa fa-refresh ${isRefreshing ? 'fa-pulse' : ''}`} />
              </button>
            </li>
          </ul>
        </Repository>
      ))}
    </Container>
  );
};

CompareList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
      full_name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }),
  ).isRequired,
  deleteRepo: PropTypes.func.isRequired,
  updateRepo: PropTypes.func.isRequired,
};

export default CompareList;
