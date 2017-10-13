const React = require('react');
const {Actions} = require('p-flux');
import {DefaultButton} from 'pivotal-ui/react/buttons';
import {Input} from 'pivotal-ui/react/inputs';
import {Icon} from 'pivotal-ui/react/iconography';

class TodoAdder extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {todoItem: ''};
  }

  submit = e => {
    e.preventDefault();
    Actions.todoItemCreate(this.state.todoItem);
    this.setState({todoItem: ''});
  };

  change = e => {
    this.setState({[e.currentTarget.name]: e.target.value});
  };

  render() {
    const {todoItem} = this.state;

    return (
      <div className="todo-adder">
        <form onSubmit={this.submit}>
          <div className="form-group form-inline">
            <label htmlFor="todo-input">Things to do</label>
            <Input {...{
              id: 'todo-input',
              name: 'todoItem',
              placeholder: 'Enter todo',
              value: todoItem,
              onChange: this.change
            }}/>
          </div>
          <DefaultButton type="submit" icon={<Icon src="checkmark" />} iconPosition="right">
            Submit!
          </DefaultButton>
        </form>
      </div>
    );
  }
};

module.exports = TodoAdder;
