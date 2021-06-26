import './App.css';
import Boss from "./Boss";
import Home from "./Home";
import Employee from "./Employee";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/Boss">
                        <Boss/>
                    </Route>
                    <Route exact path="/Employee">
                        <Employee/>
                    </Route>
                    <Route path="/" >
                        <Home/>
                    </Route>
                </Switch>
            </Router>

    </div>
  );
}

export default App;
