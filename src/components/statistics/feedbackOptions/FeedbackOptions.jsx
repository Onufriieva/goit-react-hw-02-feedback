import PropTypes from 'prop-types';
import React from 'react';


const FeedbackOptions = ({ onBtnGood, onBtnNeutral, onBtnBad }) => (
    <ul>
      <li><button type="button" onClick={onBtnGood}>Good</button> </li>
      <li><button type="button" onClick={onBtnNeutral}>Neutral</button></li>
      <li><button type="button" onClick={onBtnBad}>Bad</button></li>     
    </ul>
);
 

// FeedbackOptions.propTypes = {
//     ul: PropTypes.string,
//     li: PropTypes.string,
//     button: PropTypes.string,
//   }

export default FeedbackOptions;