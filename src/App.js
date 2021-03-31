import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            {/* <About /> */}
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>*** ABOUT *** Edit <code>src/App.js</code> and save to reload.</p>
                <a  className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
                <Welcome name="Atul" />
              </header>
            </div>
          </Route>

          <Route path="/users">
            {/* <Users /> */}
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>*** USERS *** Edit <code>src/App.js</code> and save to reload.</p>
                <a  className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
                <Welcome name="Atul" />
              </header>
            </div>
          </Route>

          <Route path="/">
            {/* <Home /> */}
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>*** HOME *** Edit <code>src/App.js</code> and save to reload.</p>
                <a  className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
                <Welcome name="Atul" />
              </header>
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}