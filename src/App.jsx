import data from "./components/data";
import Entry from "./components/Entry";
import Header from "./components/Header";
import "./App.css";

function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    );
  });

  return (
    <div className="container">
      <Header />
      <main className="thumbnail">
        {entryElements}
      </main>
    </div>
  );
}

export default App;
