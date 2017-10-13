require('../spec_helper');

describe('UserListPage', () => {
  beforeEach(() => {
    const UserListPage = require('../../../app/components/user_list_page');
    const users = [Factory.build('user', {name: 'Felix'})];
    ReactDOM.render(<UserListPage {...{users}}/>, root);
  });

  it('renders the users', () => {
    expect('.user-list').toContainText('Felix');
  });

  it('renders a person icon for each users', () => {
    expect('.user-list li .icon').toExist();
    expect('.user-list li .icon svg').toHaveClass('icon-person');
  });
});
