import './App.css';
import About from './Component/About';
import Blog from './Component/Blog';
import Home from "./Component/Home";
import Project from './Component/Project';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Blog />
      <Project />
    </div>
  );
}

export default App;
