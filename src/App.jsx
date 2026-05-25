import { useState, useEffect } from "react";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

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

    {onRemove && (
      <button onClick={() => onRemove(story.objectID)}>
        Delete
      </button>
    )}
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

/* ================= INPUT ================= */
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
  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(`${API_ENDPOINT}react`);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  /* FETCH DATA */
  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);
        const data = await response.json();

        setStories(data.hits);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchStories();
  }, [url]);

  /* INPUT HANDLER */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  /* SUBMIT SEARCH */
  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  return (
    <div>
      <Header />

      <InputWithLabel value={searchTerm} onInputChange={handleSearch}>
        Search:
      </InputWithLabel>

      <button
        onClick={handleSearchSubmit}
        disabled={!searchTerm}
      >
        Search
      </button>

      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List stories={stories} />
      )}
    </div>
  );
};

export default App;