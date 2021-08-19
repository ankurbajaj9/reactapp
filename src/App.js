import logo from './logo.svg';
import './App.css';
import Rest from './components/Rest'

function App() {
  const elem = <Rest></Rest>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Rest></Rest>
      </header>
    </div>
  );
}

export default App;
