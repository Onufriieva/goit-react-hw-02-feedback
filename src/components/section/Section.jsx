import PropTypes from 'prop-types';
import { SectionTitle } from './SectionStyled';


 const Section = ({ title, children }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;

// class Section extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };

      

//    handleIncrement = (e) => {
//       this.setState(prevState => {
//           return {
//             [e]: prevState[e] + 1,
//           };
//         });
//     }; 


//     calculateTotal = () => Object.values(this.state).reduce((acc, value) => acc + value, 0);

  
//     //   calculateTotal() {
//     //     const { good, neutral, bad } = this.state;
//     //     return good + neutral + bad;
//     //   }

//     countPercentage() {
//         const { good } = this.state;
//         const total = this.calculateTotal();
//         return Math.round((good * 100) / total);
//       }

//       render() {
//         const total = this.calculateTotal();
//         const percentage = this.countPercentage();

//         return (
//         <section>
//             {Children}

//             <FeedbackOptions
//             onBtnClick={this.handleIncrement}
//             options={[...Object.keys(this.state)]}
//             /> 


//             {this.calculateTotal() === 0 ? <Notification message="There is no feedback"/> : 
//             <Statistics
//             goodValue={this.state.good}
//             neutralValue={this.state.neutral}
//             badValue={this.state.bad}
//             total={total}
//             percentage={percentage}
//             />  }

//         </section>
//         )
//     }
// };


// export default Section