const FakePostsApi = require('../api/fake_posts_api');

const ApiDispatcher = {
  fetchPosts(){
    return FakePostsApi.fetch().then((data) => {
      this.dispatch({type: 'updatePosts', data});
    });
  },
  updatePosts({data}) {
    this.$store.merge({posts: data});
  },
  fetchMenu() {
    return this.$store.refine('menu').get();
  },
  updateMenu({data}) {
    this.$store.refine('menu').push(data);
  }
};

module.exports = ApiDispatcher;
