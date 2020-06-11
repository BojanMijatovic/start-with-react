import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';                                           //import  random pictures from open source faker.js
import CommentDetail from './CommentDetail';      // import component 
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Max" date="today at 6:22PM" content="nice blog :)" avatarImg={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" date="today 2:58AM" content="good luck" avatarImg={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Tom" date="yesterday 4:44AM" content="Best post" avatarImg={faker.image.avatar()} />
      </ApprovalCard>
    </div> // use all component 
  );
}

ReactDOM.render(<App />, document.getElementById('root'));