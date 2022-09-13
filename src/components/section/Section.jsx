import Statistics from 'components/statistics';
import FeedbackOptions from 'components/statistics/feedbackOptions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';


class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

      handleIncrementGood = () => {
        this.setState(prevState => {
            return {                
                good: prevState.good + 1               
            };
        });
      }

      handleIncrementNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            };
        });
      }

      handleIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            };
        });
      }

      calculateTotal = () => Object.values(this.state).reduce((acc, value) => acc + value, 0);
  
    

      render() {
        const total = this.calculateTotal();


        return (
        <section>
            <h1>Please leave feedback</h1>

            <FeedbackOptions
            onBtnGood={this.handleIncrementGood}
            onBtnNeutral={this.handleIncrementNeutral}
            onBtnBad={this.handleIncrementBad}
            />

            <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
            />    

            <p>Total:{total}</p>    
            <p>Percent:{}</p>   
        </section>
        )
    }
};


// export default function Section({ children }) {
// return (
//     <section>
//           <h1>Please leave feedback</h1>
//           {children}
//     </section>
// )
// }

Section.propTypes = {
    section: PropTypes.string,
    h1: PropTypes.string,
    p: PropTypes.string,
    p: PropTypes.string,
}

export default Section