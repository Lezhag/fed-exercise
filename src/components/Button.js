import styled, {css} from "styled-components";

export const Button = styled.button`
    width: ${props => props.width}
    color: #fff;
    background-color: rgb(91, 185, 92);
    font-weight: 400;
    border-radius: 6px;
    font-size: 16px;
    height: 45px;
    cursor: pointer;
    &:hover, &:focus, &:active {
      outline: none;
    }
    ${props => props.disabled && css`
      background-color: rgba(91, 185, 92, 0.5);
      pointer-events: none;
    `}
`;