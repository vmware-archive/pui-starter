const {Actions} = require('p-flux');
const React = require('react');
import {DefaultButton} from 'pivotal-ui/react/buttons';
import {Input} from 'pivotal-ui/react/inputs';

class UserCreatePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {userName: ''};
  }

  submit = e => {
    e.preventDefault();
    Actions.userCreate({name: this.state.userName});
    this.setState({userName: ''});
    Actions.setRoute('/users/list');
  };

  change = e => {
    this.setState({[e.currentTarget.name]: e.target.value});
  };

  render() {
    const {userName} = this.state;
    return (
      <div className="user-create-page">
        <h3>Create a User!</h3>
        <form onSubmit={this.submit}>
          <Input type="text" name="userName" value={userName} onChange={this.change}/>
          <DefaultButton type="submit">Create User</DefaultButton>
        </form>
      </div>
    );
  }
}

module.exports = UserCreatePage;
