//   import React and ReactDOM libraries
import React from 'react';                          // import statements
import ReactDOM from 'react-dom';

//   create React components
const App = () => {                            // functions base component
  const btnText = 'Click me';
  const labelText = 'Name :';
  return (                                         // convection with multi lines    
    <div>
      <label htmlFor="name" className='label'>{labelText}</label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'teal', color: 'white' }}>{btnText}</button>
    </div>      // inline style with css  
  );
}

//  take the react component and show it to the screen
ReactDOM.render(<App />, document.querySelector('#root'));