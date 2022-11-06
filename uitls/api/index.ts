import Axios from 'axios';

const API = {
  getRoutes: () => {
    return Axios.get('/api/routes')
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },

  getNewsTrend: () => {
    return Axios.get('/api/news')
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },

  getArticles: () => {
    return Axios.get('/api/articles')
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};

export default API;
