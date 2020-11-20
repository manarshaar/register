import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default function index(props) {
  const counters = props.c;

  return (
    <div className="container">
      <FontAwesomeIcon icon={faSync} className="icon" onClick={props.refresh} />
      <div>
        {counters.map(({ key, sum }) => (
          <span key={key}>
            <div className="counter">{sum === 0 ? "Zero" : sum}</div>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="plus_icon"
              onClick={() => props.add(key)}
            />
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="minus_icon"
              onClick={() => props.sub(key)}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
