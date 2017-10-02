const React = require('react');
import PropTypes from 'prop-types';
const TodoAdder = require('./todo_adder');
import {UnorderedList, ListItem} from 'pivotal-ui/react/lists';

class TodoPage extends React.Component {
  static propTypes = {
    config: PropTypes.object,
    todoItems: PropTypes.array
  };

  render() {
    const {config: {title}, todoItems} = this.props;

    const todoItemsList = todoItems.map((item, key) =>
      <ListItem key={key} className="todo-item">{item}</ListItem>);
    return (
      <div className="todo-page">
        <h3 className="title">{title}</h3>
        <TodoAdder/>
        <UnorderedList className="todo-list">
          {todoItemsList}
        </UnorderedList>
      </div>
    );
  }
}

module.exports = TodoPage;
