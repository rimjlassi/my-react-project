const courseTitle = "React Development";

function App() {
  const studentName = "Arij";

  const student = {
    name: "Arij",
    age: 20,
    track: "Frontend"
  };

  const sayHello = () => {
    return "Hello from the sayHello function! Welcome " + studentName;
  };

  return (
    <div>
      <h1>Hello, I am learning React!</h1>
      <p>Student: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="username">Enter your name:</label>
      <input type="text" id="username" />
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
    </div>
  );
}

export default App;

// 1. I understand how to use {} to display JavaScript values in JSX
// 2. I am still confused about when to put variables inside vs outside the component
// 3. I forgot to use htmlFor instead of for and got a warning