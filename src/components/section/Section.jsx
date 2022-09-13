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

    // handleIncrement = ({  name  }) => 
    //     this.setState(prevState => {
    //         return {                
    //            [name]: prevState[name] + 1              
    //         };
    //     });
      

      
//     handleIncrement = evt => {
//     const name = evt.currentTarget.name;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   }; 

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
  
    //   calculateTotal() {
    //     const { good, neutral, bad } = this.state;
    //     return good + neutral + bad;
    //   }

    countPercentage() {
        const { good } = this.state;
        const total = this.calculateTotal();
        return Math.round((good * 100) / total);
      }

      render() {
        const total = this.calculateTotal();
        const percentage = this.countPercentage();

        return (
        <section>
            <h1>Please leave feedback</h1>

              <FeedbackOptions
            onBtnClick={this.handleIncrement}
            onBtnGood={this.handleIncrementGood}
            onBtnNeutral={this.handleIncrementNeutral}
            onBtnBad={this.handleIncrementBad}
            buttons={this.state}
            /> 


            <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
            />    

            <p>Total:{total}</p>    
            <p>Percent:{percentage}</p>   
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

// Section.propTypes = {
//     ul: PropTypes.string,
//     section: PropTypes.string,
//     h1: PropTypes.string,
//     p: PropTypes.string,
//     p: PropTypes.string,
// }

export default Section