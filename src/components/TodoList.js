import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const todoList = this.props.todoList;
    const onMarkDone = this.props.onMarkDone;
    
    return (
      <div>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} onMarkDone ={onMarkDone}/>
        ))}
      </div>
    );
  }
}
