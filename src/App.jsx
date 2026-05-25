import { useState, useEffect } from "react";

// Item component - renders a single story
const Item = ({ story }) => (
  <div>
    <h3>
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.title}
      </a>
    </h3>
    <p>Author: <span>{story.author}</span></p>
    <p>Points: <span>{story.points}</span></p>
    <p>Comments: <span>{story.num_comments}</span></p>
  </div>
);

// List component - receives stories via destructured props
const List = ({ stories }) => (
  <div>
    {stories.map((story) => (
      <Item key={story.objectID} story={story} />
    ))}
  </div>
);

// Search component - controlled input, receives value and handler via props
const Search = ({ searchTerm, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      type="text"
      id="search"
      value={searchTerm}
      onChange={onSearch}
    />
  </div>
);

// Header component
const Header = () => (
  <div>
    <h1>Hacker News Stories</h1>
  </div>
);

// App component - owns all data and state
const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;

// Reflection:
// 1. A controlled component is an input whose value is controlled by React state,
//    not by the DOM. The value always reflects what is in state.
// 2. A side effect is anything that happens outside of rendering,
//    like saving to localStorage, fetching data, or setting timers.
// 3. We use useEffect because it runs AFTER rendering is complete,
//    keeping side effects separate from the render logic.