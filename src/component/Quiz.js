import React from "react";
import Question from "./Question";
import blob1 from "../image/blob1.png";
import blob2 from "../image/blob2.png";
export default function Quiz(props) {
  const randomNumber = Math.floor(Math.random() * 3);
  const checkToggle = () => {};
  return (
    <>
      <div className="container quiz_container">
        <img src={blob1} alt="" className="blob3" />
        <img src={blob2} alt="" className="blob4" />
        <section className="quiz">
          {props.data.map((vlaue, index) => {
            return (
              <Question
                key={index}
                question={vlaue.question}
                option={vlaue.incorrect_answers}
                correctAnswer={vlaue.correct_answer}
              />
            );
          })}
        </section>
        <div className="footer">
          {/* <p className="foooter-para">You scored 3/5 correct answers</p> */}
          <button
            type="button"
            className="btn-main m-auto"
            onClick={checkToggle}
          >
            Check answers
          </button>
        </div>
      </div>
    </>
  );
}
