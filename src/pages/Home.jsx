import React from "react";

export default function Home({
  topics,
  completedTopics,
  onSelect,
  onFinish
}) {
  const allDone = completedTopics.length === topics.length;

  return (
    <div className="home">
      <h1 className="title">תחומי הדאגה והטיפול בפרט</h1>

      <div className="topics-grid">
        {topics.map(topic => (
          <div
            key={topic.id}
            className={`topic-card ${
              completedTopics.includes(topic.id) ? "done" : ""
            }`}
            onClick={() => onSelect(topic)}
          >
            {topic.title}
            {completedTopics.includes(topic.id) && <span> ✔</span>}
          </div>
        ))}
      </div>

      <button
        className="finish-course-btn"
        disabled={!allDone}
        onClick={onFinish}
      >
        סיום הלומדה
      </button>
    </div>
  );
}
