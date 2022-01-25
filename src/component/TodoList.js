import React, { useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faFile,
  faCommentDots,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faPen } from '@fortawesome/free-solid-svg-icons';
import AddTodo from './AddTodo';

function TodoList({ todo, stared, setStared }) {
  const [editTodo, setEditTodo] = useState(false);
  

  const handleStar = () => {
    console.log('Star');
  };

  const handleEdit = () => {
    console.log('Edit');
    setEditTodo(true);
  };

  // $(function () {
  //   $('.header , .body').hide();
  //   $('#add-task').on('focus', function () {
  //     $('#add-task').hide();
  //     $('.pen').addClass('text-blue');
  //     $('.header , .body ').show().slideDown().delay(3000);
  //   });
  //   $('.btn-cancel').on('click', function () {
  //     $('.pen').removeClass('text-blue');
  //     $('.header , .body ').hide();
  //     $('#add-task').show();
  //   });
  //   $('.btn-submit').on('click', function () {
  //     $('.pen').removeClass('text-blue');
  //     $('.body ').hide();
  //     $('#add-task').show();
  //   });
  //   $('.editPen').on('click', function () {
  //     $('.editPen').addClass('text-blue');
  //   });
  // });

  return (
    <>
      <div class="w-96 max-w-screen-xl mx-auto">
        <div class="list w-96 flex flex-col justify-center bg-gray-lighter shadow-md rounded-sm h-20 border-b border-gray my-2">
          <div class="flex flex-row mx-3.5 my-1">
            <input type="checkbox" id="checkbox" class="mx-2" />
            <p class="mx-0.5 font-medium w-20">{todo.title} </p>
            <div class="ml-56 mx-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faStar}
                onClick={handleStar}
                onKeyDown={handleStar}
                role="button"
                tabIndex={0}
              />
            </div>
            <div
              class="editPen mx-2 cursor-pointer"
              onClick={handleEdit}
              onKeyDown={handleEdit}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
          <div class="flex flex-row ml-10 py-1 text-xs text-gray-dark tracking-wide">
            <div class="px-2">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div class="pr-1">{todo.deadline_date}</div>
            <div class="px-1">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div class="px-1">
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </div>
        </div>
      </div>
      <AddTodo type="edit" AddTodoModal={editTodo} setAddTodoModal={setEditTodo} />
    </>
  );
}

export default TodoList;
