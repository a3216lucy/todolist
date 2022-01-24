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

// import PageTitle from './PageTitle';

// const date, time;
function AppContent() {
  // export default class AppContent extends React.Component {
  // constructor() {
  //   super();
  // }

  // componentDidMount(){
  const [title, setTitle] = useState('');
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [comment, setComment] = useState('');
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, date, time, comment});
    // if (title && comment) {
    //   dispatch(
    //     addTodo({
    //       id: uuid(),
    //       title,
    //       // status,
    //       // date: new Date().toLocaleDateString,
    //       // time: new Date().toLocaleTimeString,
    //       comment,
    //     })
    //   );
    // }
  };

  $(function () {
    // $('.header , .body').hide();
    $('#add-task').on('focus', function () {
      $('#add-task').hide();
      $('.pen').addClass('text-blue');
      $('.header , .body ').show().slideDown().delay(3000);
    });
    $('.btn-cancel').on('click', function () {
      $('.pen').removeClass('text-blue');
      $('.header , .body ').hide();
      $('#add-task').show();
    });
    $('.btn-submit').on('click', function () {
      $('.pen').removeClass('text-blue');
      $('.body ').hide();
      $('#add-task').show();
    });
    $('.pen').on('click', function () {
      $('.pen').addClass('text-blue');
      $('.body').show().slideDown();
    });
  });
  // }

  // render(){
  return (
    <div class="w-96 max-w-screen-xl mx-auto">
      {/* <PageTitle>This is app content.</PageTitle> */}

      <div class="w-96 flex flex-col justify-center bg-white shadow-md rounded-sm mb-4">
        <input
          type="text"
          id="add-task"
          class="px-2 py-2 rounded-sm"
          placeholder="＋ Add Task"
        ></input>
      </div>
      {/* <form class="" > */}
        <div class="header w-96 flex flex-col justify-center bg-gray-lighter shadow-md rounded-sm h-14 border-b border-gray">
          <div class="flex flex-row mx-3.5 my-1 ">
            <input type="checkbox" id="checkbox" class="mx-2" />
            <input
              type="text"
              id="todo"
              class="mx-0.5 bg-transparent"
              placeholder="Type Something Here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div class="ml-16 mx-2 cursor-pointer">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div class="pen mx-2 cursor-pointer">
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </div>
        <div class="w-96 body flex-col float-left bg-gray-lighter shadow-md rounded-sm h-80">
          <div class="mt-5 mx-12">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <label
              htmlFor="deadline"
              class="text-dark text-sm font-medium mx-1.5"
            >
              Deadline
            </label>
          </div>
          <div class="my-2">
            <input
              type="date"
              id="date"
              class="ml-68 rounded-sm"
              placeholder="yyyy/mm/dd"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>

            <input
              type="time"
              id="time"
              class="mx-1.5 rounded-sm"
              placeholder="hh:mm"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
          <div class="mt-3 mx-12">
            <FontAwesomeIcon icon={faFile} />
            <label htmlFor="file" class="text-dark text-sm font-medium mx-2">
              File
            </label>
          </div>
          <div class="ml-68 font-normal text-xl text-gray">
            <input type="file" id="file" class="hidden"></input>
            <label for="file">
              <FontAwesomeIcon icon={faPlusSquare} />
            </label>
          </div>
          <div class="mt-2 mb-1.5 mx-12">
            <FontAwesomeIcon icon={faCommentDots} />
            <label htmlFor="comment" class="text-dark text-sm font-medium mx-1">
              Comment
            </label>
          </div>
          <textarea
            rows="3"
            id="comment"
            class="ml-68 px-2 pt-1 w-64 outline-none rounded-sm focus:outline-1 focus:outline-blue"
            placeholder="Type your memo here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div class="mt-6 shadow-md">
            <button class="w-1/2 btn-cancel">✕ Cancel</button>
            <button class="w-1/2 btn-submit" onClick={(e) => handleSubmit(e)}>＋ Add Task</button>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
  // }
}

export default AppContent;
