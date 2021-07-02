import React, { useContext } from 'react'
import useSound from 'use-sound';

import { QuizContext } from '../../helpers/Contexts'

//components
import Topics from '../Topics'

//bootsrap
import { Button, Card } from 'react-bootstrap';

//sound
import selectSfx from '../../assets/sound/selectQuiz.wav';


export default function MainMenu() {
    const { setGameState } = useContext(QuizContext);
    const [playSelectSound] = useSound(selectSfx);

    const clickSetGame = () =>{
        setGameState('quiz');
        playSelectSound();

    }
    return (
        <Card>
            <Button className="startBtn" size="lg" variant="success" onClick={() => { clickSetGame()}}>Start quiz</Button>
            <Topics />
        </Card>
    )
}
