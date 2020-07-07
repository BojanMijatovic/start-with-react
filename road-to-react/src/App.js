import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
class App extends Component {

  state = {
    person: [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walker',
        num_comments: 3,
        points: 4,
        objectID: 0,
      }
    ]
  }

  onDismiss = (id) => { // remove by filtered method
    const filterID = this.state.person.filter(p => p.objectID !== id);
    this.setState({ person: filterID })
  }

  render() {
    return (
      <div>
        {this.state.person.map(p => {
          return <div className='ui container' key={p.objectID}>
            <div className="ui card">
              <div className="content">
                <div className="header">{p.author}</div>
                <div className="meta">Points :{p.points}</div>
              </div>
              <div className="extra content">
                <a href='/'>
                  <i aria-hidden="true" className="user icon"></i>Num off comments{p.num_comments}</a>
              </div>
            </div>
            <span>
              <button onClick={() => this.onDismiss(p.objectID)} className='ui button'>Dismiss</button>
            </span>
          </div>
        })}
      </div>
    )
  }
}

export default App;
