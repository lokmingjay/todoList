import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { INIT_TODOS } from "../constants/constants";
import update from "immutability-helper";

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkDone = this.onMarkDone.bind(this);
    this.state = {
      todoList: INIT_TODOS,
    };
  }

  onMarkDone(id) {
    const todoList = this.state.todoList;
    const todo = todoList.find((todo) => todo.id === id);
    const index = todoList.findIndex((todo) => todo.id === id);
    const updatedTodoList = update(todoList, {
      [index]: { $merge: { status: !todo.status } },
    });
    console.log(todoList);
    console.log(updatedTodoList);

    this.setState({
      todoList: updatedTodoList,
    });
  }

  render() {
    return (
      <div>
        To Do List
        <TodoList todoList={this.state.todoList} onMarkDone={this.onMarkDone} />
        <TodoForm />
      </div>
    );
  }
}
