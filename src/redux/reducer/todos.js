import { ADD_TODO, TOGGLE_TODO } from '../actionsType.js';

// const getInitialTodo = () => {
//   const localTodoList = window.localStorage.getItem('todoList');
//   if (localTodoList) {
//     return JSON.parse(localTodoList);
//   }
//   window.localStorage.setItem('todoList', JSON.stringify([]));
//   return [];
// };

const initialState = {
  todos:[],
}

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState: initialValue,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todoList.push(action.payload);
//       const todoList = window.localStorage.getItem('todoList');
//       if (todoList) {
//         const todoListArr = JSON.parse(todoList);
//         todoListArr.push({
//           ...action.payload,
//         });
//         window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
//       } else {
//         window.localStorage.setItem(
//           'todoList',
//           JSON.stringify([{ ...action.payload }])
//         );
//       }
//     },
//     updateTodo: (state, action) => {
//       const todoList = window.localStorage.getItem('todoList');
//       if (todoList) {
//         const todoListArr = JSON.parse(todoList);
//         todoListArr.forEach((todo) => {
//           if (todo.id === action.payload.id) {
//             todo.status = action.payload.status;
//             todo.file = action.payload.file;
//             todo.comment = action.payload.comment;
//             todo.deadline_date = action.payload.deadline_date;
//             todo.deadline_time = action.payload.deadline_time;
//             todo.title = action.payload.title;
//           }
//         });
//         window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
//         state.todoList = [...todoListArr];
//       }
//     },
//   },
// });

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, title, deadline_date, deadline_time, comment, file, stared } = action.payload;
      return {
        todos: [
          ...state.todos, 
          { 
            id,
            title, 
            completed: false, 
            deadline_date,
            deadline_time,
            file,
            comment,
            stared,
           }
        ]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    }

    default: {
      return state;
    }
  }
}


// export const { addTodo, updateTodo } = todoSlice.actions;
export default todos;
// export default todoSlice.reducer;