import React, { useState } from "react";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import { topics } from "./data";
import "./styles.css";
import logoMifkada from "./images/mifkada.png";
import hadrahaLogo from "./images/hadracha.png";
import schoolLogo from "./images/school.png";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

export default function App() {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [finished, setFinished] = useState(false);

  function markTopicCompleted(topicId) {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
    setCurrentTopic(null);
  }

  return (
    <div className="app">
      <AuroraBackground>
        <motion.div
           animate={{ opacity: 1, y: 0 }}
           transition={{
             delay: 0.3,
             duration: 0.8,
             ease: "easeInOut",
           }}
           className="content"
        >
          <div className="logos">
            <img src={schoolLogo} alt="schoolLogo" className="logo" />
            <img src={hadrahaLogo} alt="hadrahaLogo" className="logo" />
            <img src={logoMifkada} alt="logoMifkada" className="logo" />
          </div>
          {finished && (
            <div className="finish-screen">
              <h1>כל הכבוד! 🎉</h1>
              <p>סיימת בהצלחה את הלומדה</p>
            </div>
          )}
          {!finished && currentTopic && (
            <Topic
              topic={currentTopic}
              onBack={() => setCurrentTopic(null)}
              onComplete={() => markTopicCompleted(currentTopic.id)}
              isCompleted={completedTopics.includes(currentTopic.id)}
            />
          )}
          {!finished && !currentTopic && (
            <Home
              topics={topics}
              completedTopics={completedTopics}
              onSelect={setCurrentTopic}
              onFinish={() => setFinished(true)}
            />
          )}
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
