import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoModal extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    handleAddTodo = (e) => {
        const { todos } = this.state;

        this.setState({
            todos: [
                ...todos,
                { e }
            ]
        });
    }

   

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <AddTodo 
                    handleAddTodo={this.handleAddTodo}
                />
                <TodoList 
                    todos={todos}
                />
            </div>
        );
    }
}
