import PropTypes from 'prop-types';
import React from 'react';


const FeedbackOptions = ({ onBtnGood, onBtnNeutral, onBtnBad }) => (
    <ul>
      <button type="button" onClick={onBtnGood}>Good</button> 
      <button type="button" onClick={onBtnNeutral}>Neutral</button>
      <button type="button" onClick={onBtnBad}>Bad</button>
    </ul>
);
 

FeedbackOptions.propTypes = {
    ul: PropTypes.string,
    button: PropTypes.string,
    button: PropTypes.string,
    button: PropTypes.string,
}

export default FeedbackOptions;