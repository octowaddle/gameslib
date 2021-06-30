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
    <form className="add-entry" onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder={game.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Platform</label>
        <input
          type="text"
          placeholder={game.platform}
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type="text"
          placeholder={game.year}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label>Cover</label>
        <input
          type="text"
          placeholder={game.cover}
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
      </div>

      <input type="submit" value="Save" />
      <input type="button" name="cancel" value="Cancel" onClick={onCancel} />
    </form>
  );
};

EditEntryMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

export default EditEntryMenu;
