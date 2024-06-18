import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SimpleCounter(props) {
  const { seconds } = props;

  const digitOne = Math.floor(seconds % 10);
  const digitTwo = Math.floor((seconds / 10) % 10);
  const digitThree = Math.floor((seconds / 100) % 10);
  const digitFour = Math.floor((seconds / 1000) % 10);

  return (
    <div className="bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="four">{digitFour}</div>
      <div className="three">{digitThree}</div>
      <div className="two">{digitTwo}</div>
      <div className="one">{digitOne}</div>
    </div>
  );
}

export default SimpleCounter;
