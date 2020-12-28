import styled from 'styled-components';


export const ChooserWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 15px 0;
    font-family: 'Stint Ultra Condensed',cursive;    
    color: snow;
`
export const ChooserLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-wrap: wrap;
    max-width: 300px;
    font: inherit;
    color: inherit;
`

export const ChooserCheckbox = styled.input`
    cursor: pointer;
    margin-right: 10px;    
`