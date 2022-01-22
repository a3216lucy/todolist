import React from 'react';
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

function AppContent() {
  return (
    <div class="w-96 max-w-screen-xl mx-auto bg-gray-lighter shadow-md rounded-sm h-80">
      {/* <PageTitle>This is app content.</PageTitle> */}
      <div class="flex flex-col justify-center">
        <div class="header flex flex-row mx-3.5 my-4">
          <input type="checkbox" id="checkbox" class="mx-2"></input>
          <input
            type="text"
            id="todo"
            class="mx-0.5 bg-transparent"
            placeholder="Type Something Here..."
          ></input>
          <div class="ml-16 mx-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div class="mx-2">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
        <div class="container flex flex-col float-left">
          <div class="my-1 mx-12">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <label
              htmlFor="deadline"
              class="text-dark text-sm font-medium mx-1.5"
            >
              Deadline
            </label>
          </div>
          <div class="my-1 mx-16">
            <input
              type="date"
              id="date"
              class="mx-1.5 rounded-sm"
              placeholder="yyyy/mm/dd"
            ></input>

            <input
              type="time"
              id="time"
              class="mx-1.5 rounded-sm"
              placeholder="hh:mm"
            ></input>
          </div>
          <div class="my-1 mx-12">
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
          <div class="my-1 mx-12">
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
        </div>
      </div>
    </div>
  );
}

export default AppContent;
