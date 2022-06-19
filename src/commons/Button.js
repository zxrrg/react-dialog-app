import "./Button.css";

const Button = ({
  color = "blue",
  name = "name",
  size = "medium",
  type = null,
  disabled = false,
  onClick,
}) => {
  return (
    <div className="button-container">
      <button
        disabled={disabled}
        className={`custom-button ${color} ${size} ${type}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;
