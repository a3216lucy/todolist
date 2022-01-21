import React,{components} from 'react';
import Button from './Button';
export class AppHeader {
  render() {
    return (
      <div>
        <input type="radio" name="tab" id="content1"></input>
        <h1>Hello from header</h1>
        <Button>Click Me</Button>
      </div>
    );
  }
}

export default AppHeader;
