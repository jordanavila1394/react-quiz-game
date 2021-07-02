import React from 'react'
//icons
import { HiBadgeCheck, HiXCircle } from "react-icons/hi";


export default function Answer(props) {
    return (
        <div>
            {`${props.index}. ${props.prompt}`}<br />
            {props.correct ? <HiBadgeCheck /> : <HiXCircle />}{` ${props.optionChosed}`}<br />
            {!props.correct && <> Correct: {props.answer} </>}
        </div>
    )
}
