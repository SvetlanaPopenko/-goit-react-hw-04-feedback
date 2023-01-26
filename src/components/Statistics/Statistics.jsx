import './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="Statistic__list">
      <li className="Statistic__item">Good:{good}</li>
      <li className="Statistic__item">Neutral:{neutral}</li>
      <li className="Statistic__item">Bad:{bad}</li>
      <li className="Statistic__item">Total:{total}</li>
      <li className="Statistic__item">Positive feedback:{positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
