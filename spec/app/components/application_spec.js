require('../spec_helper');

describe('Application', () => {
  beforeEach(() => {
    const Application = require('../../../app/components/application');
    const config = {title: 'title'};
    ReactDOM.render(<Application {...{config, Dispatcher}}/>, root);
  });

  it('has a TodoAdder', () => {
    expect('.todo-adder').toExist();
  });

  it('has a TodoList', () => {
    expect('.todo-list').toExist();
  });

  it('has a title', () => {
    expect('.title').toHaveText('title');
  });
});
