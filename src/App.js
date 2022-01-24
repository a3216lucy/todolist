import React from 'react';
import AddTodo from './component/AddTodo';
import TodoModal from './component/TodoModal';
import TodoItem from './component/TodoItem';

function App() {
  return (
    <div class="container max-w-fit m-0">

      {/* tab section start  */}
      <input type="radio" name="tab" id="content1" class="hidden" checked></input>
      <input type="radio" name="tab" id="content2" class="hidden"></input>
      <input type="radio" name="tab" id="content3" class="hidden"></input>

      <div class="nav flex justify-center items-center mx-auto bg-blue h-16 w-full">
        <label for="content1">
          <span class="font-normal text-base  cursor-pointer text-blue-dark bg-blue px-10 py-5 transition">My Tasks</span>
        </label>
        <label for="content2">
          <span class="font-normal text-base  cursor-pointer text-blue-dark bg-blue px-10 py-5 transition">In Progress</span>
        </label>
        <label for="content3">
          <span class="font-normal text-base  cursor-pointer text-blue-dark bg-blue px-10 py-5 transition">Completed</span>
        </label>
      </div>

      <div class="tab-content1 hidden w-full bg-gray-light overflow-hidden">
        <div class="my-10 mx-40 flex-column justify-center">
        <div>
        {/* <TodoModal /> */}
        <AddTodo /> 
        <TodoItem />
        
        </div>
          <p>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div class="tab-content2 hidden w-full bg-gray-lighter overflow-hidden">
        <div class="my-10 mx-40 flex justify-center">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
          </p>
        </div>
      </div>
      <div class="tab-content3 hidden w-full bg-gray-lighter overflow-hidden">
        <div class="my-10 mx-40 flex justify-center">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
