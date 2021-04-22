import './App.css';
import Word from './Word/Word'
import Typography from "@material-ui/core/Typography"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Word Cloud</Typography>
        <hr />
      </header>
      <Word />
    </div>
  );
}

export default App;
