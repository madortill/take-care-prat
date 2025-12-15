import React, { useState } from "react";

export default function Topic({ topic, onBack, onComplete, isCompleted }) {
  const [index, setIndex] = useState(0);
  const card = topic.cards[index];
  const isLast = index === topic.cards.length - 1;

  function handleComplete() {
    if (!isCompleted) {
      onComplete();
    }
  }

  return (
    <div className="topic-page">
      <button className="back-btn" onClick={onBack}>
        
      </button>

      <h2 className="topic-title">{topic.title}</h2>

      <div className="slider">
        <button
          disabled={index === 0} onClick={() => setIndex((i) => i - 1)}
        >
          ▶
        </button>

        <div className="card big">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-text">{card.text}</p>
        </div>

        <button disabled={index === topic.cards.length - 1}
          onClick={() => setIndex((i) => i + 1)}>
          ◀
        </button>
      </div>

      <p className="counter">
        {index + 1} / {topic.cards.length}
      </p>

      {isLast && (
        <button
          className={`finish-topic-btn ${isCompleted ? "done" : ""}`}
          onClick={handleComplete}
          disabled={isCompleted}
        >
          {isCompleted ? "הנושא הושלם ✔" : "סיימתי את הנושא"}
        </button>
      )}
    </div>
  );
}
