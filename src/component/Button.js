import React from 'react';

function Button({ children }) {
  return (
    <button class="p-2 rounded-md my-2" type="button">
      {children}
    </button>
  );
}

export default Button;
