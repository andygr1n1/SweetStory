import {useState} from 'react';

export function useChoices() {

    const [choice, setChoice] = useState("")

    function checkChoice(e) {
        setChoice(e.target.value)
    }


    return {choice, setChoice, checkChoice}
}