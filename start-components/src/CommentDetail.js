import React from 'react';



const CommentDetail = (props) => {  //  consume props argument  from parent component
  // console.log(props.author);           // props are singe child component 
  return (
    <div className="comment">
      <a href="/" className="avatar"><img alt="avatar" src={props.avatarImg} /></a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
}

export default CommentDetail;