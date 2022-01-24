import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faFile,
  faCommentDots,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faPen } from '@fortawesome/free-solid-svg-icons';
import { addTodo } from '../slices/todoSlice';
import { v4 as uuid } from 'uuid';

function TodoList() {
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState();
  // const [time, setTime] = useState();
  // const [file, setFile] = useState([]);
  // const [comment, setComment] = useState('');
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ title, date, time, file, comment });
  // };

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
  //   $('.pen').on('click', function () {
  //     $('.pen').addClass('text-blue');
  //     $('.body').show().slideDown();
  //   });
  // });

  return (
    <div class="w-96 max-w-screen-xl mx-auto">
      <div class="header w-96 flex flex-col justify-center bg-gray-lighter shadow-md rounded-sm h-14 border-b border-gray">
        <div class="flex flex-row mx-3.5 my-1 ">
          <input type="checkbox" id="checkbox" class="mx-2" />
          <input
            type="text"
            id="todo"
            class="mx-0.5 bg-transparent"
            placeholder="Type Something Here..."
          ></input>
          <div class="ml-16 mx-2 cursor-pointer">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div class="pen mx-2 cursor-pointer">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
