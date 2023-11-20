import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {
    questions, 
    onDeleteQuestion, 
    onUpdateQuestion} 
  ) {
  // Create question components.
  const questionComponents = questions.map((question) => {
    return (
        <QuestionItem 
          key={question.id} 
          question={question} 
          onDeleteQuestion={onDeleteQuestion}
          onUpdateQuestion={onUpdateQuestion}
        />
    )
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionComponents}</ul>
    </section>
  );
}

export default QuestionList;