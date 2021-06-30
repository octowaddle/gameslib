import { useState } from "react";
import PropTypes from "prop-types";

const AddEntryMenu = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !platform || !year) {
      alert("Please add required information.");
      return;
    }

    onAdd({ title, platform, year, cover });

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
          placeholder="Overhyped Game"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Platform</label>
        <input
          type="text"
          placeholder="PC > Console"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type="text"
          placeholder="2077"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label>Cover</label>
        <input
          type="text"
          placeholder="https://path/to/cover.jpg"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
      </div>

      <input type="submit" value="Add to your library" />
      <input type="button" name="cancel" value="Cancel" onClick={onCancel} />
    </form>
  );
};

AddEntryMenu.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddEntryMenu;
