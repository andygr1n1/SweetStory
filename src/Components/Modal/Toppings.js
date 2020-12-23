import React from 'react';
import {ChooserCheckbox, ChooserLabel, ChooserWrap} from "../UI/Chooser";


export function Toppings({toppings, checkToppings}) {

    return (
        <ChooserWrap>
            {toppings.map((topping, i) => (
                <ChooserLabel key={i}>
                    <ChooserCheckbox name="radioButton" type="radio" checked={topping.checked}
                                     onChange={() => checkToppings(i)}/>{topping.name}
                </ChooserLabel>
            ))}
        </ChooserWrap>
    )
}