const MainDispatcher = {
  setRoute({data}) {
    this.$store.refine('currentRoute').set(data);
    this.router.navigate(data);
  },
  todoItemCreate({data}) {
    this.$store.refine('todoItems').push(data);
  },
  userCreate({data}) {
    this.$store.refine('users').push(data);
  },
  userSet({data}) {
    this.$store.merge({userId: data});
  },
  setTab({data}) {
    this.$store.refine('tab').set(data);
  },
  getTab() {
    return this.$store.refine('tab').get();
  }
};

module.exports = MainDispatcher;
