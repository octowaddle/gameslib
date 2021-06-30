import { RiAddFill, RiSaveFill, RiUploadFill } from "react-icons/ri";
import { CgGames } from "react-icons/cg";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShowAdd, disableAdd }) => {
  return (
    <header>
      <div class="left">
        <Button
          disabled={disableAdd}
          label={<RiAddFill />}
          onClick={onShowAdd}
        />
      </div>
      <h1 class="center">
        <div>
          <CgGames />
          {title}
        </div>
      </h1>
      <div class="right">
        <Button label={<RiUploadFill />} />
        <Button label={<RiSaveFill />} />
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Library",
  disableAdd: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onShowAdd: PropTypes.func,
  disableAdd: PropTypes.bool,
};

export default Header;
