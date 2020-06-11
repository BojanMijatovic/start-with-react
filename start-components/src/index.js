import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';                        //import  random pictures from open source faker.js
import CommentDetail from './CommentDetail';      // import component 


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Max" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Tom" />
    </div> // use all component 
  );
}

ReactDOM.render(<App />, document.getElementById('root'));