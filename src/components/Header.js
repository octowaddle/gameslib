import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShowAdd, disableAdd }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button disabled={disableAdd} label="Add" onClick={onShowAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Game library",
  disableAdd: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onShowAdd: PropTypes.func,
  disableAdd: PropTypes.bool,
};

export default Header;
