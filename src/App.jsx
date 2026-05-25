// Global stories array
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

// Header - arrow function, concise body
const Header = () => (
  <div>
    <h1>Hacker News Stories</h1>
  </div>
);

// Search - arrow function, block body (needs logic inside)
const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

// List - arrow function, concise body with map
const List = () => (
  <div>
    {stories.map((story) => (
      <div key={story.objectID}>
        <h3>
          <a href={story.url} target="_blank" rel="noreferrer">
            {story.title}
          </a>
        </h3>
        <p>Author: <span>{story.author}</span></p>
        <p>Points: <span>{story.points}</span></p>
        <p>Comments: <span>{story.num_comments}</span></p>
      </div>
    ))}
  </div>
);

// App - arrow function, concise body
const App = () => (
  <div>
    <Header />
    <Search />
    <List />
  </div>
);

export default App;

// Reflection:
// 1. Concise body arrow functions are used when the function only returns one expression
// 2. Block body arrow functions are used when we need logic (variables, if statements, handlers)
// 3. The event object contains information about the user interaction,
//    including event.target.value which holds the typed text