import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Header />
      <Jobs />
      <footer>
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> by{" "}
          <a href="https://github.com/mfauvernier">Mederic Fauvernier</a>
        </p>
      </footer>
    </>
  );
}

export default App;
