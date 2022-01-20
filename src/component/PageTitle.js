import React from 'react';

function PageTitle({children}) {
  return (
  <div>
    <h1 class="text-2xl font-bold text-gray-500 text-center leading-8 my-5">{children}</h1>  
  </div>
  );
}

export default PageTitle;
