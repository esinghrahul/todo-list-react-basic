import React, { Component } from 'react'

import TodoItem from './todo-item.component'

export default class TodoList extends Component{
    render(){
        return(
            <div><TodoItem /></div>
        )
    }
}