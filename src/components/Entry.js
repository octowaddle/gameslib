import PropTypes from "prop-types";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const Entry = ({ game, onDelete, onShowEdit }) => {
  const { show } = useContextMenu({
    id: "entry-context-menu",
  });

  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        game: game,
      },
    });
  }

  const handleDelete = ({ event, props }) => {
    onDelete(props.game.id);
  };

  const handleEdit = ({ event, props }) => {
    onShowEdit(props.game);
  };

  return (
    <>
      <li className="entry" onContextMenu={handleContextMenu}>
        <h2 className="title">{game.title}</h2>
        <img className="cover" alt="cover" src={game.cover}></img>
        <p className="year">{game.year}</p>
        <p className="platform">{game.platform}</p>
      </li>
      <Menu id="entry-context-menu">
        <Item onClick={handleEdit}>Edit</Item>
        <Item onClick={handleDelete}>Delete</Item>
      </Menu>
    </>
  );
};

Entry.propTypes = {
  game: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onShowEdit: PropTypes.func.isRequired,
};

export default Entry;
