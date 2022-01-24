import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';

function TodoItem() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList]; 
  sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time));
  return ( 
  <div>
    {sortedTodoList && sortedTodoList.length > 0
     ? sortedTodoList.map((todo) => <TodoList todo={todo} />)
     : 'no todo found'}
    </div>
  );
  
}

export default TodoItem;