//   import React and ReactDOM libraries
import React from 'react';                          // import statements
import ReactDOM from 'react-dom';

//   create React components
const App = () => {             // functions base component
  return (                            // convection with multi lines  
    <div>
      <label for="name">Name:</label>
      <input id='name' type='text' />
      <button>submit</button>
    </div>
  );
}

//  take the react component and show it to the screen
ReactDOM.render(<App />, document.querySelector('#root'));