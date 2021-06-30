import { useState } from "react";
import Header from "./components/Header";
import Library from "./components/Library";
import AddEntryMenu from "./components/AddEntryMenu";
import EditEntryMenu from "./components/EditEntryMenu";

const App = () => {
  const [editEntryData, setEditEntryData] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [games, setGames] = useState([
    {
      id: 1,
      title: "Cyberpunk 2077",
      year: 2020,
      platform: "PC",
      cover:
        "https://gamepreorders.com/wp-content/uploads/2019/06/cover-art-6.jpg",
    },
    {
      id: 50,
      title: "Skyrim",
      year: 2011,
      platform: "PlayStation 4",
      cover:
        "https://www.mobygames.com/images/covers/l/376858-the-elder-scrolls-v-skyrim-special-edition-xbox-one-front-cover.png",
    },
  ]);

  const deleteEntry = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const addEntry = ({ title, platform, year, cover }) => {
    setShowAddForm(false);
    const id = Math.floor(Math.random() * 10000) + 1;
    const entry = { id, title, platform, year, cover };
    setGames([...games, entry]);
  };

  const editEntry = (game) => {
    games.forEach((entry, i) => {
      if (entry.id === game.id) games[i] = game;
    });
    setShowEditForm(false);
  };

  return (
    <div className="App">
      <Header
        onShowAdd={() => {
          setShowEditForm(false);
          setShowAddForm(true);
        }}
        disableAdd={showAddForm}
      />
      {showAddForm && (
        <AddEntryMenu onAdd={addEntry} onCancel={() => setShowAddForm(false)} />
      )}
      {showEditForm && (
        <EditEntryMenu
          onEdit={editEntry}
          onCancel={() => setShowEditForm(false)}
          game={editEntryData}
        />
      )}
      <Library
        games={games}
        onDelete={deleteEntry}
        onShowEdit={(game) => {
          setShowAddForm(false);
          setShowEditForm(true);
          setEditEntryData(game);
        }}
      />
    </div>
  );
};

export default App;
