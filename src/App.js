import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from 'uuid'
import "@fortawesome/fontawesome-free/css/all.min.css";

import TodoList from './components/todo-list.component';
import TodoInput from './components/todo-input.component';


export default class App extends React.Component{

  state={
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem= {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems= [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = (id) => {
    const uneditedItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: uneditedItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
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

