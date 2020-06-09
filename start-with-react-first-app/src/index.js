//   import React and ReactDOM libraries
import React from 'react';                          // import statements
import ReactDOM from 'react-dom';

//   create React components

const App = () => {             // functions base component
  return <div>Hello there :)</div>
}

//  take the react component and show it to the screen
ReactDOM.render(<App />, document.querySelector('#root'));