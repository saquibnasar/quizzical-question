import "./App.scss";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./component/Quiz";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [datas, setDatas] = useState([]);
  const [quiz, setQuiz] = useState({
    isCheck: true,
    id: nanoid(),
  });
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple"
    )
      .then((res) => res)
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, [0]);
  console.log([...datas]);
  // const newObject = Object.assign([...datas], { quiz });
  // console.log(newObject);
  // // let data = [...datas];
  // // console.log(data);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quiz">
            <Quiz data={datas} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
