import "./App.scss";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./component/Quiz";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/quizzical-question/">
            <Home />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
