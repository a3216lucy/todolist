import React from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faFile,
  faCommentDots,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faPen } from '@fortawesome/free-solid-svg-icons';

// import PageTitle from './PageTitle';

// function InputDate() {
// var inputDate = document.querySelector("#date");
// var changeType = function(){
//   this.type = "date";
//   console.log(this);
// }
// var removeEvent = function(){
//   console.log(this);
//   if(this.focus){
//     this.removeEventListener("focus",changeType);
//     this.removeEventListener("blur",removeEvent)
//   }
// }
// inputDate.addEventListener("focus",changeType);
// inputDate.addEventListener("blur",removeEvent);
// }

// function AppContent() {
class AppContent extends React.Component {
  // constructor() {
  //   super();
  //   this.focusTextInput = this.focusTextInput.bind(this);
  // }

  componentDidMount() {
    // this.focusTextInput();
    $(function () {
      $('.body').hide();
      $('.pen').on('click', function () {
        $('.pen').addClass('text-blue');
        $('.body').show().slideDown();
      });
    });
  }

  // focusTextInput() {
  //   $(function () {
  //         $('.body').hide();
  //         $('#todo').on('focus', function () {
  //           $('.body').show().slideDown();
  //         });
  //       });
  //   }

  render() {
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
        <div class="w-96 flex flex-col justify-center bg-gray-lighter shadow-md rounded-sm h-14 border-b border-gray">
          <div class="header flex flex-row mx-3.5 my-1 ">
            <input type="checkbox" id="checkbox" class="mx-2"></input>
            <input
              type="text"
              id="todo"
              class="mx-0.5 bg-transparent"
              placeholder="Type Something Here..."
              required
            ></input>
            <div class="ml-16 mx-2">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div class="pen mx-2">
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </div>
        <div class="w-96 body flex-col float-left bg-gray-lighter shadow-md rounded-sm h-80 hidden">
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
            ></input>

            <input
              type="time"
              id="time"
              class="mx-1.5 rounded-sm"
              placeholder="hh:mm"
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
            class="ml-68 px-2 pt-1 w-64 outline-none rounded-sm"
            placeholder="Type your memo here..."
          ></textarea>
          <div class="mt-6">
            <button class="w-1/2 btn-cancel">✕ Cancel</button>
            <button class="w-1/2 btn-submit">＋ Add Task</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContent;
