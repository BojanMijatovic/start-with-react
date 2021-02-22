import React from 'react';
import ReactDOM from 'react-dom';
 

//  Create React Component
const App = () => {
  return <div> 
    <label id='name'>Name</label>
    <input type="text"  id="name"/>
    <button style={{backgroundColor: 'teal' , color: 'whitesmoke'}}>submit</button>
    <p> Text here</p>  
      <p> And  here</p>

  </div>;
};
/*
fokus je bio bas na tome - uzmi i zapisi,
uradi vezbu, i bez preterivanja, ovo je bila stavka koja me je pokrenula sa
mrtve tacke razmisljanja i planiranja
*/ 

ReactDOM.render(<App/>, document.getElementById('root'));

