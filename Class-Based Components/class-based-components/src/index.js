import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <h1>Testing</h1>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
