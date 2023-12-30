import styled, {css} from "styled-components";

type StyleBtnPropsType = {
    btnType: "primary" | "outlined"
    color?: string
}
export const StyleBtn = styled.button<StyleBtnPropsType>`
    width: 86px;
    height: 30px;
    border: none;
    border-radius: 5px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    
    ${props => props.btnType === "primary" && css<StyleBtnPropsType>`
        color:#FFF;
        background-color: ${props => props.color || '#4E71FE'};
        
        &:hover {
            background-color: #FFF;
            color: #4E71FE;
            border: 2px solid ${props => props.color || "#4E71FE"};
        }
    `}
    
    ${props => props.btnType === "outlined" && css<StyleBtnPropsType>`
        border: 2px solid ${props => props.color || "#4E71FE"};
        color: #4E71FE;
        background-color: #FFF;
        
        &:hover {
            background-color: #4E71FE;
            color: #FFF;
        }
    `}    
    
    
`