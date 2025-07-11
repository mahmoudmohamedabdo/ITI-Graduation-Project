import { useState } from "react";
import HeaderStats from "../components/exam/HeaderStats";
import AllQuestions from "../components/exam/AllQuestions";

const questions = [
  {
    id: 1,
    title: "What is JSX?",
    description: "JSX allows writing HTML-like code in JavaScript.",
    difficulty: "Easy",
    topic: "Fundamentals",
    time: "2 min",
    isNew: true,
    options: ["true", "false"],
    correctAnswer: "true",
    explanation: "JSX lets you write HTML-like elements in React.",
  },
  {
    id: 2,
    title: "Which hook is used for managing state?",
    description: "React provides hooks for state and side effects.",
    difficulty: "Medium",
    topic: "Hooks",
    time: "2 min",
    isNew: true,
    options: ["useEffect", "useState", "useContext"],
    correctAnswer: "useState",
    explanation: "useState manages local state in functional components.",
  },
  {
    id: 3,
     type: "code",
    title: "Write a React component",
    description: "Create a functional component that returns a heading.",
    difficulty: "Medium",
    topic: "Code Writing",
    time: "2 min",
    isNew: true,
    options: [],
    correctAnswer: "function Hello() { return <h1>Hello</h1>; }",
    explanation: "Basic example of a functional component.",
  },
];

const ExamPage = () => {
  const [completed, setCompleted] = useState([]);

  const handleQuestionSubmit = (questionId) => {
    if (!completed.includes(questionId)) {
      setCompleted((prev) => [...prev, questionId]);
    }
  };

  const percentage = Math.round((completed.length / questions.length) * 100);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <HeaderStats
        trackName="React - Fresh"
        questionsCompleted={completed.length}
        totalQuestions={questions.length}
        percentage={percentage}
      />
      <AllQuestions
        questions={questions}
        completed={completed}
        onSubmit={handleQuestionSubmit}
      />
    </div>
  );
};

export default ExamPage;