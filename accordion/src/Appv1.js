import "./index.css";
import { useState } from "react";

const questions = [
  {
    question: "What language is React built on?",
    answer: "JavaScript",
  },
  {
    question: "What are the building block of React ?",
    answer: "components",
  },
  {
    question: "What is the name of the syntax to display UI in React ?",
    answer: "JSX",
  },
  {
    question:
      "What do we use to pass data from parent to child components in React ?",
    answer: "Props",
  },
  {
    question:
      "What do we call an input element that is completely synchronise with time ?",
    answer: "Controlled element",
  },
  {
    question: "What do we use to give component a memory in React",
    answer: "useState Hook",
  },
  {
    question: "Who compiled this FAQs ?",
    answer: "Daniel Amaechi",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={questions} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      <h2 style={{ textAlign: "center" }}>React FAQs</h2>

      {data.map((el, i) => (
        <AccordionItem
          question={el.question}
          answer={el.answer}
          num={i}
          key={el.question}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>

      <p className="title">{question}</p>

      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box"> {answer} </div>}
    </div>
  );
}
