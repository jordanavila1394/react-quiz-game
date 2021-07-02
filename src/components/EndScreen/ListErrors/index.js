import React from 'react'

//bootsrap
import { ListGroup } from 'react-bootstrap';

// Children
import Answer from './Answer'

export default function ListErrors({ answerResults, questions }) {
    return (
        <ListGroup as="ul">
            {answerResults.map((answer, i) => {
                const question = questions[answer.currQuestion];
                return <ListGroup.Item variant={!answer.correct ? question['option' + answer.optionChosen] !== undefined ? "danger": 'warning' : "success"} key={i} as="li">
                    <Answer
                        index={i + 1}
                        prompt={question.prompt}
                        optionChosed={question['option' + answer.optionChosen]}
                        correct={answer.correct}
                        answer={question['option' + question.answer]}
                    />
                </ListGroup.Item >
            }
            )}
        </ListGroup>
    )
}
