import React, { useState } from 'react';
import AddTodo from './AddTodo';



function InputAddTodo() {
  const [addTodoModal, setAddTodoModal] = useState(false);
  return (
    <>
      <div class="w-96 max-w-screen-xl mx-auto">
        <div class="w-96 flex flex-col justify-center bg-white shadow-md rounded-sm mb-4">
          <input
            type="text"
            id="add-task"
            class="px-2 py-2 rounded-sm"
            placeholder="＋ Add Task"
            onClick={() => setAddTodoModal(true)}
          ></input>
        </div>
      </div>
      <AddTodo
        type="add"
        addTodoModal={addTodoModal}
        setAddTodoModal={setAddTodoModal}
      />
    </>
  );
}

export default InputAddTodo;
