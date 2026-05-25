// Global stories array - accessible by all components
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

// Header component - displays the app title
function Header() {
  return (
    <div>
      <h1>Hacker News Stories</h1>
    </div>
  );
}

// Search component - responsible for the search UI only
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

// List component - responsible for rendering the stories list
function List() {
  return (
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
}

// App component - the main component that puts everything together
function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;

// Reflection:
// 1. App is now just a container that assembles all components together
// 2. List is responsible only for rendering the stories
// 3. Search is responsible only for the search input UI
// 4. This structure is cleaner because each component has one job,
//    making it easier to debug, reuse, and maintain