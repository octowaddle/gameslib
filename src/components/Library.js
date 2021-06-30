import PropTypes from "prop-types";
import Entry from "./Entry";

const Library = ({ games, onDelete, onShowEdit }) => {
  return (
    <ul className="library">
      {games.map((game) => (
        <Entry
          key={game.id}
          game={game}
          onDelete={onDelete}
          onShowEdit={onShowEdit}
        />
      ))}
    </ul>
  );
};

Library.propTypes = {
  games: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onShowEdit: PropTypes.func.isRequired,
};

export default Library;
