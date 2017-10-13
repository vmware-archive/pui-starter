const React = require('react');
import PropTypes from 'prop-types';
import {UnorderedList, ListItem} from 'pivotal-ui/react/lists';
import {Icon} from 'pivotal-ui/react/iconography';

class UserListPage extends React.Component {
  static propTypes = {
    users: PropTypes.array
  };

  render() {
    const {users} = this.props;
    const userItems = users.map((user, key) => <ListItem key={key}><Icon src="person" verticalAlign="baseline"/>{user.name}</ListItem>);
    return (
      <div className="user-list-page">
        <h3>List of Users</h3>
        <UnorderedList className="user-list">{userItems}</UnorderedList>
      </div>
    );
  }
}

module.exports = UserListPage;
