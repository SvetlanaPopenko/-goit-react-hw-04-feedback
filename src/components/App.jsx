import {Component} from "react";
import Statistics from "./Statistics";
import Proptypes from 'prop-types';
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";


export class App extends Component {
    static defaultProps = {
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = event => {
    this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };

    countTotalFeedback = () => 
      Object.values(this.state).reduce((acc, value) => (acc += value), 0);
    
  countPositiveFeedbackPercentage = ({ good } = this.state) => {
    return Math.round((good * 100) / this.countTotalFeedback() || 0);
    };

    render() {
      const { good, neutral, bad } = this.state;
      const options = Object.keys(this.state);

      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          <h1>Please leave feedback</h1>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={ }></Statistics>
        </div>
      );
    }
  };
