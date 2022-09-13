import PropTypes from 'prop-types';
import React from 'react';


const FeedbackOptions = ({ onBtnGood, onBtnNeutral, onBtnBad }) => (
    <div>
      <button type="button" onClick={onBtnGood}>Good</button>
      <button type="button" onClick={onBtnNeutral}>Neutral</button>
      <button type="button" onClick={onBtnBad}>Bad</button>
    </div>
);
 

FeedbackOptions.propTypes = {
    div: PropTypes.string,
    button: PropTypes.string,
    button: PropTypes.string,
    button: PropTypes.string,
}

export default FeedbackOptions;