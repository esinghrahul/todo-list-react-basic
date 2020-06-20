import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from 'uuid'
import "@fortawesome/fontawesome-free/css/all.min.css";

import TodoList from './components/todo-list.component';
import TodoInput from './components/todo-input.component';


export default class App extends React.Component{

  state={
    items: [
      {id: 1, title: "wake up on time"},
      {id: 2, title: "buy groceries"}
    ],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => console.log('handle change')
  handleSubmit = (e) => console.log('handle submit')
  handleDelete = (id) => console.log('handle Delete')
  handleEdit = (id) => console.log('handle Edit')
  clearList = () => console.log('clear list')
  render(){
  return (
    <div className="container">
      <div className= "row">
        <div className= "col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">
            <TodoInput item ={this.state.item} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} editItem = {this.state.editItem} />
            <TodoList items = {this.state.items} clearList = {this.clearList} handleDelete = {this.handleDelete} handleEdit= {this.handleEdit} />
          </h3>
        </div>
      </div>
    </div>
  );}
}

