import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  state = {
    person: {
      name: 'Alex',
      lastName: 'Smith'
    },
    teacher: [
      {
        title: 'Help to learn React',
        classes: 125,
        points: 0,
        author: 'Jordan Fluke',
        id: Math.random()
      }
    ]


  }

  render() {
    const helloWorld = `Welcome to React road map`;
    return (
      <div className='ui container'>
        <h2 className='huge header ui center aligned container'>{helloWorld}</h2>
        <h3>This is {this.state.person.name} {this.state.person.lastName}</h3>
        <i className="rs flag"></i>
        <p>Greets from Serbia</p>
        {this.state.teacher.map((t) => {
          return (
            <div className="ui card" key={t.id}>
              <div className="content">
                <div className="header">{t.author}</div>
                <div className="description">{t.title}</div>
              </div>
              <div className="extra content">
                <i aria-hidden="true" className="user icon"></i>
                 Num off students: {t.classes}</div>
            </div>
          )
        }
        )}
      </div>
    )
  }
}

export default App;
