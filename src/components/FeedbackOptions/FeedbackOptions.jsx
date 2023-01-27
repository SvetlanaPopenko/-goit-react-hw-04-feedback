import PropTypes from 'prop-types';
import {
  FeedbackButton,
  FeedbackList,
  FeedbackItem,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((option, idx) => (
        <FeedbackItem key={idx}>
          <FeedbackButton onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1, option.length)}
          </FeedbackButton>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
