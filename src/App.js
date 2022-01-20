import React from 'react';
import PageTitle from './component/PageTitle';

function App() {
  return (
    <div class="container">
      <PageTitle>To Do List</PageTitle>

      {/* tab section start  */}
      <section class="tabs block flex-wrap overflow-hidden">
    <div class="tab-1">
    <label class="tab1-1 font-medium text-xl text-white block cursor-pointer">My Tasks</label>
    <div>
      <h4>Tab One</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas.</p>
    </div>
    </div>

    <div class="tab-2">
    <label class="tab1-2 font-medium text-xl text-gray-dark block cursor-pointer">In Progress</label>
    <div>
      <h4>Tab One</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas.</p>
    </div>
    </div>

    <div class="tab-3">
    <label class="tab1-3 font-medium text-xl text-gray-dark block cursor-pointer">Completed</label>
    <div>
      <h4>Tab One</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas.</p>
    </div>
    </div>

  </section>
    </div>
  );
}

export default App;
