import { useState, useEffect } from "react";

/* ================= ITEM ================= */
const Item = ({ story, onRemove }) => (
  <div>
    <h3>
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.title}
      </a>
    </h3>

    <p>Author: <span>{story.author}</span></p>
    <p>Points: <span>{story.points}</span></p>
    <p>Comments: <span>{story.num_comments}</span></p>

    <button onClick={() => onRemove(story.objectID)}>
      Delete
    </button>
  </div>
);

/* ================= LIST ================= */
const List = ({ stories, onRemove }) => (
  <div>
    {stories.map((story) => (
      <Item
        key={story.objectID}
        story={story}
        onRemove={onRemove}
      />
    ))}
  </div>
);

/* ========== REUSABLE INPUT ========== */
const InputWithLabel = ({ value, onInputChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>

    <input
      id="search"
      type="text"
      value={value}
      onChange={onInputChange}
    />
  </div>
);

/* ================= HEADER ================= */
const Header = () => (
  <div>
    <h1>Hacker News Stories</h1>
  </div>
);

/* ================= APP ================= */
const App = () => {
  const initialStories = [
    {
      objectID: 1,
      title: "React just got even better",
      url: "https://react.dev",
      author: "dan_abramov",
      points: 300,
      num_comments: 38,
    },
    {
      objectID: 2,
      title: "Vite 5.0 is here",
      url: "https://vitejs.dev",
      author: "yyx990803",
      points: 189,
      num_comments: 27,
    },
    {
      objectID: 3,
      title: "Understanding JavaScript closures",
      url: "https://developer.mozilla.org",
      author: "mdn_contributor",
      points: 312,
      num_comments: 54,
    },
    {
      objectID: 4,
      title: "CSS Grid complete guide",
      url: "https://css-tricks.com",
      author: "chriscoyier",
      points: 178,
      num_comments: 21,
    },
  ];

  const [stories, setStories] = useState(initialStories);

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // DELETE FUNCTION (LAB 8)
  const handleRemoveStory = (id) => {
    const newStories = stories.filter(
      (story) => story.objectID !== id
    );
    setStories(newStories);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <InputWithLabel
        value={searchTerm}
        onInputChange={handleSearch}
      >
        Search:
      </InputWithLabel>

      <List
        stories={filteredStories}
        onRemove={handleRemoveStory}
      />
    </div>
  );
};

export default App;