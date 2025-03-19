import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Web Developer with experience in React.js and TypeScript.</p>
      </header>
      <AboutMe name="John Doe" profession="Web Developer" />
      <footer>
        <p>Contact me: email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
