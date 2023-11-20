import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  // Load questions
  useEffect(() => {
    fetch ('http://localhost:4000/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  // Add new question
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
    console.log(`Question id #${newQuestion.id} add to the list.`);
  }

  // Filter out deleted question
  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
    console.log(`Question id #${deletedQuestion.id} removed from the list.`)
  }

  // Update question
  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((question) => question.id === updatedQuestion.id ? updatedQuestion : question);
    setQuestions(updatedQuestions);
    console.log(`Question id #${updatedQuestion.id} updated; it now has a new correct answer.`);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {
        page === "Form" ? 
        <QuestionForm onAddQuestion={handleAddQuestion}/> : 
        <QuestionList 
          questions={questions} 
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion}
        />
      }
    </main>
  );
}

export default App;