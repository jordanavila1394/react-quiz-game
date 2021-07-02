import React, { useState, useContext } from 'react'
import useSound from 'use-sound';

//helpers
import { QuizContext } from '../../helpers/Contexts'

//components
import Division from '../Division'

//bootsrap
import { Button, Card } from 'react-bootstrap';

//sound
import clickNextSfx from '../../assets/sound/clickQuiz.wav';
import optionSelectedSfx from '../../assets/sound/optionQuiz.wav';


export default function Quiz() {
    const { score, setScore, setGameState, answerResults, setAnswerResults, questions } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [playNextSound] = useSound(clickNextSfx);
    const [playOptionSound] = useSound(optionSelectedSfx);

    //Variables

    //Functions
    const checkAnswer = () => {
        if (questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
            setAnswerResults([...answerResults, { currQuestion, optionChosen, correct: true }]);
        } else {
            setAnswerResults([...answerResults, { currQuestion, optionChosen, correct: false }]);
        }
        setOptionChosen('');
        playNextSound();
    }
    const nextQuestion = () => {
        checkAnswer();
        setCurrQuestion(currQuestion + 1);
    }

    const finishQuiz = () => {
        checkAnswer();
        setGameState("endScreen");
    }

    const clickSetOptionChosen = (option) =>{
        setOptionChosen(option);
        playOptionSound();
    }

    return (
        <Card>
            <div className="prompt">
                <Card.Title>{questions[currQuestion].prompt}</Card.Title>
            </div>
            <div className="options">
                <Button onClick={() => clickSetOptionChosen('A')} block>{questions[currQuestion].optionA}</Button>
                <Button onClick={() => clickSetOptionChosen('B')} block>{questions[currQuestion].optionB}</Button>
                <Button onClick={() => clickSetOptionChosen('C')} block>{questions[currQuestion].optionC}</Button>
                <Button onClick={() => clickSetOptionChosen('D')} block>{questions[currQuestion].optionD}</Button>
            </div>
            <div className="steps">
                <Division numerator={currQuestion + 1} denominator={questions.length} />
            </div>
            <div className="actions">
                {currQuestion === questions.length - 1 ? (
                    <Button size="lg" variant="danger" onClick={finishQuiz} block>Finish Quiz</Button>
                ) : (
                    <Button size="lg" variant="success" onClick={nextQuestion} block>Next Question</Button>
                )}
            </div>
        </Card>
    )
}
