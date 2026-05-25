// Data structure for each story:
// {
//   objectID: unique number - used as React key
//   title: string - article title
//   url: string - link to article
//   author: string - who posted it
//   points: number - popularity score
//   num_comments: number - number of comments
// }
// objectID is used as the key because it is unique and stable
// This structure is realistic because it matches the real Hacker News API
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
    objectID: 4,                              // 👈 new story added
    title: "CSS Grid complete guide",
    url: "https://css-tricks.com",
    author: "chriscoyier",
    points: 178,
    num_comments: 21,
  },
];
function App() {
  console.log(stories[0]);

  return (
    <div>
      <h1>Hacker News Stories</h1>
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

export default App;
// Reflection:
// 1. map() is essential because it transforms each item into JSX and returns a new array React can render
// 2. objectID is the correct key because it is unique and never changes, unlike array index
// 3. When using the real API, we replace the stories array with data fetched from the Hacker 

