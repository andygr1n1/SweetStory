import React from 'react';
import {ChooserCheckbox, ChooserLabel, ChooserWrap} from "../UI/Chooser";

export const FoodComponents = ({foodComponents, checkFoodComponents}) => {
    return (
        <ChooserWrap>
            {foodComponents.map((item, idx) => (
                <ChooserLabel key={idx}>
                    <ChooserCheckbox
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => {checkFoodComponents(idx)} }
                    />
                    {item.name}
                </ChooserLabel>
            ))}
        </ChooserWrap>
    )
}