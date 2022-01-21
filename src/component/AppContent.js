import React from 'react';
import AppHeader from './AppHeader';
// import PageTitle from './PageTitle';

function AppContent() {
  return (
    <div class="w-96 max-w-screen-xl mx-auto bg-gray-lighter shadow-md rounded-sm h-80">
      {/* <PageTitle>This is app content.</PageTitle> */}
      <div class="flex flex-col justify-center">
      <div class="header flex flex-row mx-3.5 my-4">
        <input type="checkbox" id="checkbox" class="mx-3.5"></input>
        <input type="text" id="todo" class="mx-3.5"></input>
      </div>
      <div class="container flex flex-col">
        {/* <h3 class="text-dark text-sm font-medium">Content</h3> */}
        <div class="my-2">
          <label
            htmlFor="deadline"
            class="text-dark text-sm font-medium mx-3.5"
          >
            Deadline
            <input type="date" id="deadline" class="mx-1.5"></input>
            <input type="time" id="deadline" class="mx-1.5"></input>
          </label>
        </div>
        <div class="my-2">
          <label htmlFor="file" class="text-dark text-sm font-medium mx-3.5">
            File
            <input type="file" id="file" class="mx-3.5"></input>
          </label>
        </div>
        <div class="my-2">
          <label htmlFor="comment" class="text-dark text-sm font-medium mx-3.5">
            Comment
            <input type="text" id="comment" class="mx-3.5"></input>
          </label>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AppContent;
