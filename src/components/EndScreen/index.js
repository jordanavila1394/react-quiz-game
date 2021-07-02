import React, { useContext } from 'react'
import { QuizContext } from '../../helpers/Contexts'
import { Button, Card } from 'react-bootstrap';
import useSound from 'use-sound';

//bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar'

//components
import ListErrors from './ListErrors'
import Division from '../Division'

//data
import { Questions } from '../../helpers/QuestionBank'

//sound
import successQuizSfx from '../../assets/sound/successQuiz.wav';
import failedQuizSfx from '../../assets/sound/failedQuiz.wav';

// utils
import { shuffle } from '../../utils/utils';


export default function EndScreen() {
    const { score, setScore, setGameState, answerResults, setAnswerResults, setTopic, questions, setQuestions } = useContext(QuizContext);
    const [successQuiz] = useSound(successQuizSfx);
    const [failedQuiz] = useSound(failedQuizSfx);


    const successProgress = (score * 100) / questions.length;
    const isSuccessQuiz = score === questions.length;

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
        setAnswerResults([]);
        setTopic("React");
        questionGenerator("React");
    }

    const questionGenerator = (topic) =>{
        const filteredQuestion = Questions.filter(question => question.topic === topic);
        const randomizedQuestion = shuffle(filteredQuestion);
        setQuestions(randomizedQuestion);
    }


    isSuccessQuiz ? successQuiz() : failedQuiz();
    return (
        <Card>
            <Card.Title>Result</Card.Title>
            <div className="results">
                <ListErrors questions={questions} answerResults={answerResults}></ListErrors>
            </div>
            <div className="steps">
                <Division numerator={score} denominator={questions.length} />
            </div>

            <ProgressBar>
                <ProgressBar striped variant="success" now={successProgress} key={1} />
                <ProgressBar variant="danger" now={100 - successProgress} key={2} />
            </ProgressBar>

            <Button size="lg" variant="secondary" onClick={restartQuiz}>Restart Quiz</Button>

        </Card>
    )
}
