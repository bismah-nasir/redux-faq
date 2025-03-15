import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const Question = ({ id, question, answer }) => {
  const dispatch = useDispatch();
  const selectedQuestions = useSelector(state => state.selectedQuestions);
  const isSelected = selectedQuestions.includes(id);

  const handleClick = () => {
    dispatch({type: "TOGGLE_STATE", questionId: id});
  };

  return (
    <div className="flex flex-col py-6">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h2>
          <button
            id={`${id}-button`}
            aria-expanded={isSelected}
            aria-controls={`${id}-panel`}
            className="text-lg text-darkPurple font-semibold hover:text-brightPurple text-left"
          >
            {question}
          </button>
        </h2>
        <img
          src={isSelected ? minusIcon : plusIcon}
          alt={isSelected ? "Collapse icon" : "Expand icon"}
        />
      </div>

      <div id={`${id}-panel`}>
        {isSelected && <p className="text-grayishPurple mt-6">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;