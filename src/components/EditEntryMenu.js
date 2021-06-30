import { useState } from "react";
import PropTypes from "prop-types";

const EditEntryMenu = ({ onEdit, onCancel, game }) => {
  const [id] = useState(game.id);
  const [title, setTitle] = useState(game.title);
  const [platform, setPlatform] = useState(game.platform);
  const [year, setYear] = useState(game.year);
  const [cover, setCover] = useState(game.cover);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !platform || !year) {
      alert("Please add required information.");
      return;
    }

    onEdit({ id, title, platform, year, cover });

    setTitle("");
    setPlatform("");
    setYear("");
    setCover("");
  };

  return (
    <>
      <div className="page-fade"></div>
      <form className="entry-menu" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={game.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder={game.platform}
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <input
          type="text"
          placeholder={game.year}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder={game.cover}
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <div className="horizontal">
          <input
            type="button"
            name="cancel"
            value="Cancel"
            onClick={onCancel}
          />
          <input type="submit" value="Save" />
        </div>
      </form>
    </>
  );
};

EditEntryMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

export default EditEntryMenu;
