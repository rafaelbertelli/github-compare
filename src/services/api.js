import axios from "axios";
import moment from "moment";

const api = axios.create({
  baseURL: "https://api.github.com"
});

export const getRepo = repo =>
  api
    .get(`/repos/${repo}`)
    .then(({ data }) => {
      data.lastCommit = moment(data.pushed_at).fromNow();

      return Promise.resolve(data);
    })
    .catch(err => Promise.reject(err.message));
