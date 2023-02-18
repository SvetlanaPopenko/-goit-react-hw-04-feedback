import { useState } from 'react';
import Statistics from './Statistics';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export const App = () => {
  const options = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback() || 0);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#eeedf8',
        backgroundColor: '#2c9af4',
        paddingTop: '20px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      {!countTotalFeedback() ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      )}
    </div>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

