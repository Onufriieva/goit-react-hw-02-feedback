import PropTypes from 'prop-types';
import React from 'react';


const Statistics = ({ goodValue, neutralValue, badValue, total, percentage }) => (
    <div>
      <h2>Statistics</h2>               
      <p>Good:{goodValue}</p>           
      <p>Neutral:{neutralValue}</p>
      <p>Bad:{badValue}</p>
      <p>Total:{total}</p>    
      <p>Percent:{percentage}</p>  
    </div>
);


Statistics.propTypes = {
    div: PropTypes.string,
    h2: PropTypes.string,
    goodValue: PropTypes.number,
    neutralValue: PropTypes.number,
    badValue: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
};

export default Statistics;