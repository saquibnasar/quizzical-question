import blob1 from "../image/blob1.png";
import blob2 from "../image/blob2.png";
import { useEffect, useState, React } from "react";
import { nanoid } from "nanoid";

export default function Quiz() {
  const [datas, setDatas] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [newGame, setNewGame] = useState(false);
  const [loader, setLoader] = useState(1);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple"
    )
      .then((res) => res)
      .then((res) => res.json())
      .then((data) => {
        setDatas(
          data.results.map((data) => {
            data.options = shuffle([
              {
                id: nanoid(),
                option: data.incorrect_answers[0],
                isCheck: false,
                question: data.question,
                answer: data.correct_answer,
                color: "white",
              },
              {
                id: nanoid(),
                option: data.incorrect_answers[1],
                isCheck: false,
                question: data.question,
                answer: data.correct_answer,
                color: "white",
              },
              {
                id: nanoid(),
                option: data.incorrect_answers[2],
                isCheck: false,
                question: data.question,
                answer: data.correct_answer,
                color: "white",
              },
              {
                id: nanoid(),
                option: data.correct_answer,
                isCheck: false,
                question: data.question,
                answer: data.correct_answer,
                color: "white",
              },
            ]);
            return data;
          })
        );
        setIsLoader(true);
      });
  }, [loader]);

  const selectedToggleHeader = (questionId, question) => {
    setDatas((datas) => {
      const test = datas.map((val) => {
        if (val.question === question) {
          for (let value of val.options) {
            value.color = "white";
            if (value.id === questionId) {
              if (value.color === "white") {
                value.color = "green";
                setNewGame(false);
              } else if (value.color === "pink") {
                value.color = "pink";
              }
            }
          }
        }

        return { ...val };
      });

      return test;
    });
  };

  const checkToggle = () => {
    if (newGame) {
      setNewGame(false);
      setCurrentAnswer([]);
      setIsLoader(false);
      setLoader(loader + 1);
    } else {
      let isAlert = false;

      for (const toggleData of datas) {
        for (const data of toggleData.options) {
          if (data.color === "green") {
            if (data.option === data.answer) {
              setDatas((value) => {
                const test = value.map((val) => {
                  if (val.question === data.question) {
                    setCurrentAnswer((data) => {
                      return [...data, val];
                    });
                    for (let value of val.options) {
                      if (value.id === data.id) {
                        value.color = "pink";
                      }
                    }
                  }

                  return { ...val };
                });

                return test;
              });
            }
            setDatas((value) => {
              const test = value.map((val) => {
                for (let value of val.options) {
                  if (value.color === "green") {
                    value.color = "red";
                  }
                }
                return { ...val };
              });

              return test;
            });

            setNewGame(true);
            isAlert = true;
          }
        }
      }

      if (!isAlert) {
        alert("Please answer the question first");
      }
    }
  };

  console.log(isLoader);

  return (
    <>
      {!datas.length | !isLoader ? (
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <div className="container quiz_container">
          <img src={blob1} alt="" className="blob3" />
          <img src={blob2} alt="" className="blob4" />
          <section className="quiz">
            {datas.map((value, index) => {
              return (
                <div key={index}>
                  <h3 className="question">{value.question}</h3>
                  <div className="option">
                    {value.options.map((ansItem, id) => {
                      return (
                        <button
                          key={id}
                          className={`btn-secondery ${
                            ansItem.color === "pink"
                              ? "rightAnswer"
                              : ansItem.color === "red"
                              ? "wrongAnswer"
                              : ""
                          }`}
                          style={{
                            backgroundColor:
                              ansItem.color === "white"
                                ? "white"
                                : ansItem.color === "green"
                                ? "#59e391"
                                : "",
                          }}
                          onClick={() => {
                            selectedToggleHeader(ansItem.id, ansItem.question);
                          }}
                        >
                          {ansItem.option}
                        </button>
                      );
                    })}
                  </div>
                  <hr />
                </div>
              );
            })}
          </section>

          <div className="footer">
            <p className="foooter-para">
              You scored {currentAnswer.length}/5 correct answers
            </p>
            <button
              type="button"
              className="btn-main m-auto"
              onClick={checkToggle}
            >
              {newGame ? "New Game" : "Check Answers"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
