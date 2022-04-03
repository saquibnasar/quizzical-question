import React from "react";

export default function Question(props) {
  return (
    <>
      <h3 className="question">{props.question}</h3>
      <div className="option">
        {props.option.map((ansItem) => {
          return <button className="btn-secondery">{ansItem}</button>;
        })}
        <button className="btn-secondery">{props.correctAnswer}</button>

        {/* {props.correctAnswer.map((ansItems) => {
          return <button className="btn-secondery">{ansItems}</button>;
        })} */}
        {/* <button className="btn-secondery">{props.option[0]}</button>
        <button className="btn-secondery">{props.option[1]}</button>
        <button className="btn-secondery">{props.option[2]}</button>
        <button className="btn-secondery">{props.correctAnswer}</button> */}
      </div>
      <hr />
    </>
  );
}
