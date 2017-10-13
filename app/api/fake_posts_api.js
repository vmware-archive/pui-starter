const {fetchJson} = require('../../helpers/fetch_helper');

const apiUrl = 'https://jsonplaceholder.typicode.com';

const FakePostsApi = {
  fetch() {
    return fetchJson(`${apiUrl}/posts`);
  }
};

module.exports = FakePostsApi;