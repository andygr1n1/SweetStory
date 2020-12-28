import React from 'react';
import {ChooserCheckbox, ChooserLabel, ChooserWrap} from "../UI/Chooser";



export function Choices({ openItem, choice, checkChoice}) {
    return (
        <ChooserWrap>
            {openItem.choices.map((item, i) => (
                <ChooserLabel key={i}>
                    <ChooserCheckbox name="radioChoices"
                                     type="radio"
                                     onChange={checkChoice}
                                     checked={item === choice}
                                     value={item}
                    />
                                     {item}
                </ChooserLabel>
            ))}
        </ChooserWrap>
    )
}