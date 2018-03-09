import styled from "styled-components";

export const TextBox = styled.textarea.attrs({
    rows: 4
})`
    box-sizing: border-box;
    border: 1px solid;
    font-size: 16px;
    padding: 5px;
    ::placeholder {
      color: #ddd;
      font-style: italic;
    }
    
    margin: 15px 0;
`;

TextBox.displayName = "TextBox";