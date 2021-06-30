import PropTypes from "prop-types";

const Button = ({ label, onClick, disabled }) => {
  return disabled ? (
    <button disabled>{label}</button>
  ) : (
    <button onClick={onClick}>{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
