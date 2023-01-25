import {Component} from "react";
import Statistics from "./Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback();
  countPositiveFeedbackPercentage()

  render() {
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
        <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} total={} positivePercentage={}></Statistics>
      </div>
    );
  }
}
