import '../src/style/SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';


const seasonConfig = {
  summer: {
    text: 'Summer time is come:)',
    iconName: 'sun'
  },
  winter: {
    text: 'Buhr its cold',
    iconName: 'snowflake'
  }
}


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
}



const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];   // destructing obj seasonConfig

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h2>{season === 'winter' ? 'Buhr its cold' : 'Summer time is come :)'}</h2>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
}


export default SeasonDisplay;