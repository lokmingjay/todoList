import React, { Component } from "react";
import { Button } from "antd";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
  }


  onClickDone(){
    this.props.onMarkDone(this.props.todo.id);
     
  }

  render() {
    const todo = this.props.todo;
    if(todo.status === true){
    return <div onClick={this.onClickDone}>{todo.content}</div>;
    }
    else{
        return <div onClick={this.onClickDone}><del>{todo.content}</del></div>;
    }
  }
}
