# start-with-react

<!--  place to learn and work with React -->

<!-- first Steps with React -->

create-react-app class-based-components

start react app -npm start
stop react app - control + c

<!--  Importing React and ReactDOM -->

import React from 'react';
import ReactDOM from 'react-dom';

Create first component  
Converting HTML to JSX

how to use in-line style css <!-- <button style={{ backgroundColor: 'teal', color: 'white' }}>{btnText}</button> -->

using className <!-- <div className=''> </div> -->

Create a functional component

<!--
     function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    // Creates a functional component
    const App = () => {
        return (
            <div>
                <div>Current Time:</div>
                <h3>{getTime()}</h3>
            </div>
        );
    }
 -->

using props to communicate from parent component to child component
parent component

<!-- <CommentDetail author="Max" date="today at 6:22PM" content="nice blog :)" avatarImg={faker.image.avatar()} /> -->

child component

  <!-- <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarImg} />
      </a> -->

use geoLocation

<!--   window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  ); -->

Handling User Input with Forms and Events

state = {
term: '',  
}

create state and add value from an anonymous function with e.target.value
update term property with setState
onChange={(e) => this.setState({ term: e.target.value })
