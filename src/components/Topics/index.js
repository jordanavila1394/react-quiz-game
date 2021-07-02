import React, { useContext } from 'react'
import { QuizContext } from '../../helpers/Contexts'
import useSound from 'use-sound';

//components
import { SplitButton, Dropdown } from 'react-bootstrap'

//data
import { Questions } from '../../helpers/QuestionBank'

//sound
import selectSfx from '../../assets/sound/selectQuiz.wav';

// utils
import { shuffle, removeDuplicates, sortAlphabetically } from '../../utils/utils';

export default function Topics() {
    const { topic, setTopic, setQuestions } = useContext(QuizContext);
    const [playSelectSound] = useSound(selectSfx);
    const topicsArray = sortAlphabetically(removeDuplicates(Questions.map(question => question.topic)));
    const setGameTopic = (topic) => {
        setTopic(topic)
        questionGenerator(topic);
        playSelectSound();
    }

    const questionGenerator = (topic) =>{
        const filteredQuestion = Questions.filter(question => question.topic === topic);
        const randomizedQuestion = shuffle(filteredQuestion);
        setQuestions(randomizedQuestion);
    }

    return (
        <SplitButton
            key={'end'}
            id={`dropdown-button-drop-end`}
            drop={'end'}
            variant="success"
            title={topic}
            size='lg'
        >
            {
                topicsArray.map((topic) => 
                <Dropdown.Item onClick={() => setGameTopic(topic)}>{topic}</Dropdown.Item>

                )
            }
        </SplitButton>
    )
}
