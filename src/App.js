import React from 'react';
import PageTitle from './component/PageTitle';

function App() {
  return (
    <div class="container max-w-fit m-0">
      <PageTitle>To Do List</PageTitle>
      {/* <div class="nav bg-blue w-full h-76 fix"></div> */}

      {/* tab section start  */}
      <nav class="justify-center flex my-0 mx-auto bg-blue w-full">
        <ul class="tabs list-none items-center mx-auto" >
          <li class="float-left block py-3 px-10">
            <label
              for="tab1"
              rel="#tab-content1"
              class="tab1-1 block relative font-medium active text-base  cursor-pointer w-full bg-blue text-white active:border-b-5 active:border-solid active:border-gray-dark"
            >
              My Tasks
            </label>
          </li>
          <li class="float-left block py-3 px-10">
            <label
              for="tab2"
              rel="#tab-content2"
              class="tab1-2 font-normal text-base text-gray-dark block w-full cursor-pointer bg-blue active:text-white"
            >
              In Progress
            </label>
          </li>
          <li class="float-left block py-3 px-10">
            <label
              for="tab3"
              rel="#tab-content3"
              class="tab1-3 font-normal text-base text-gray-dark block w-full cursor-pointer bg-blue active:text-white"
            >
              Completed
            </label>
          </li>
        </ul>
      </nav>

      <div class="tab-content-container flex flex-wrap">
        <div
          id="tab-content1"
          class="tab-content opacity-100  w-full bg-gray-light overflow-hidden active:opacity-100"
          aria-hidden="false"
        >
        <div class="my-10 mx-40 flex justify-center">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          </div>
        </div>

        <div
          id="tab-content2"
          class="tab-content hidden w-full bg-gray-light overflow-hidden active:opacity-100"
          aria-hidden="true"
        >
        <div class="mx-40 flex justify-center">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?
          </p>
          </div>
        </div>

        <div
          id="tab-content3"
          class="tab-content hidden w-full bg-gray-light overflow-hidden active:opacity-100"
          aria-hidden="true"
        >
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
