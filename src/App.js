import UseeffectComponent from './components/UseeffectComponent';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Example from './components/Example';

function App() {
  return (
    <Router>
      <div className="font-mono">
        <nav>
          <ul className="flex py-4 text-xl font-bold justify-center gap-6 items-center flex-row">
            <li className="hover:text-gray-500 transition-colors duration-200 ease-in-out">
              <NavLink to="/">Intro</NavLink>
            </li>
            <li className="hover:text-gray-500 transition-color duration-200 ease-in-out">
              <NavLink to="/example" >Example</NavLink>
            </li>
          </ul>
        </nav>

        <div className="bg-gray-200 w-full min-h-screen text-2xl text-gray-900 font-mono flex justify-center items-center">
          <Switch>
            <Route path="/" exact>
              <UseeffectComponent />
            </Route>
            <Route path="/example" exact>
              <Example/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
