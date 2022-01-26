// import React from 'react';
// import { useSelector } from 'react-redux';
// import TodoList from './TodoList';

// function TodoItem() {
//   const todoList = useSelector((state) => state.todo.todoList);
//   const sortedTodoList = [...todoList]; 
//   sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time));
//   return ( 
//   <div>
//     {sortedTodoList && sortedTodoList.length > 0
//      ? sortedTodoList.map((todo) => <TodoList key={todo.id} todo={todo} />)
//      : 'no todo found'}
//     </div>
//   );
// }

// export default TodoItem;

import React from 'react';
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import TodoList from './TodoList';

function TodoItem () {
  const { todo, visibilityFilter } = useSelector(state => state);
  const filterTodo = getTodosByVisibilityFilter(todo, visibilityFilter);

  return (
    <div>
      {filterTodo.length > 0
      ? filterTodo.map( (todo) => <TodoList key={todo.id} todo={todo} />) 
      : <div class="text-center py-3">No Todos Yay!</div>}
    </div>
  )
}

export default TodoItem;