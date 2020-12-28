import React from 'react';
import {ChooserCheckbox, ChooserLabel, ChooserWrap} from "../UI/Chooser";


export function Toppings({selectedTopping, checkTopping, openItem}) {
    return (
        <ChooserWrap>
            {openItem.toppings.map((topping, i) => (
                <ChooserLabel key={i}>
                    <ChooserCheckbox
                        value={topping}
                        name="radioButton"
                        type="radio"
                        checked={topping === selectedTopping}
                        onChange={checkTopping}
                    />
                        {topping}
                </ChooserLabel>
            ))}
        </ChooserWrap>
    )
}

//                 <ChooserLabel key={i}>
//                     <ChooserCheckbox
//                         type="radio"
//                         name="radioButton"
//                         value={topping.name}
//                         checked={topping.name === topping}
//                         onChange={checkToppings}
//                     />
//                     {topping.name}
//                 </ChooserLabel>
//             ))}
//         </ChooserWrap>
//     )
// }