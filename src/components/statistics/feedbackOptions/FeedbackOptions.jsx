import PropTypes from 'prop-types';
import React from 'react';


const FeedbackOptions = ({options, onBtnClick }) => {
                    
  return  <ul>
      {options.map((option, index) => {
          return (<li key={index}>
              <button type='button' onClick={() => onBtnClick(option)}>{option}</button>
          </li>)
      })}
           </ul> 
};

FeedbackOptions.propTypes = {
  ul: PropTypes.string,
  li: PropTypes.string,
  onBtnClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
  }

export default FeedbackOptions;