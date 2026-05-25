import { useState } from "react";

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

// List component - receives stories as props and renders each Item
const List = ({ stories }) => {
  console.log("List re-rendered");
  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};

// Search component - receives handler as prop, triggers it on input change
const Search = ({ onSearch }) => {
  console.log("Search re-rendered");
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch} />
    </div>
  );
};

// Header component
const Header = () => (
  <div>
    <h1>Hacker News Stories</h1>
  </div>
);

// App component - owns all data and state
const App = () => {
  console.log("App re-rendered");

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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;

// Reflection:
// 1. Props are data passed from parent to child (read only).
//    State is data owned by a component that can change over time.
// 2. We lift state up so that multiple components can share and react to the same data.
// 3. Filtering logic lives in App because App owns both the data and the searchTerm state.