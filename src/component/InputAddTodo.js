import React from 'react';

function InputAddTodo() {
  return (
    <div class="w-96 max-w-screen-xl mx-auto">
      <div class="w-96 flex flex-col justify-center bg-white shadow-md rounded-sm mb-4">
        <input
          type="text"
          id="add-task"
          class="px-2 py-2 rounded-sm"
          placeholder="＋ Add Task"
        ></input>
      </div>
      </div>
  );
}

export default InputAddTodo;
