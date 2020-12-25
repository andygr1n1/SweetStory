import {useState} from 'react';

export function useChoices() {

    const [choice, setChoice] = useState("")

    function checkChoice(e) {
        setChoice(e.target.value)
    }

    function saveChoice(element) {
        setChoice(element)
    }

    return {choice, checkChoice, saveChoice, setChoice}
}