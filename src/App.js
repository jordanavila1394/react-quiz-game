import './App.css';
import React, { useState } from 'react'

//components
import MainMenu from './components/MainMenu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import Header from './components/Header'

//data
import { Questions } from './helpers/QuestionBank'

//context
import { QuizContext } from './helpers/Contexts';

//style
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const initialArray = [];
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [answerResults, setAnswerResults] = useState(initialArray);
  const [topic, setTopic] = useState("React");
  const initialQuestion = Questions.filter(question => question.topic === "React");;
  const [questions, setQuestions] = useState(initialQuestion);
  const [mute, setMute] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <QuizContext.Provider value={{
        gameState,
        setGameState,
        score,
        setScore,
        answerResults,
        setAnswerResults,
        topic,
        setTopic,
        questions,
        setQuestions,
        mute,
        setMute,
      }}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
