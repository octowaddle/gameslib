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
    <>
      <div className="page-fade"></div>
      <form className="entry-menu" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cover"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <div className="horizontal">
          <input
            type="button"
            name="cancel"
            value="Cancel"
            className="cancel"
            onClick={onCancel}
          />
          <input type="submit" value="Add to your library" />
        </div>
      </form>
    </>
  );
};

AddEntryMenu.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddEntryMenu;
