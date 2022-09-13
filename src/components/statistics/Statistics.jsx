// import PropTypes from 'prop-types';
import React from 'react';


const Statistics = ({ goodValue, neutralValue, badValue }) => (
    <div>
      <h2>Statistics</h2>               
      <p>Good:{goodValue}</p>           
      <p>Neutral:{neutralValue}</p>
      <p>Bad:{badValue}</p>
    </div>
);


// Statistics.propTypes = {
//     div: PropTypes.string,
//     p: PropTypes.string,
// };

export default Statistics;