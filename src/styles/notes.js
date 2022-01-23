import styled from "styled-components";
import theme from "../theme";

export const Note = styled.section`
    display: grid;
    grid-template-rows: 0.3fr 1fr 0.2fr;
    margin-top: 1rem;
    height: 40rem;
    width: 50%;
    background-color: ${theme.whiteGlass};
    border-radius: 0.5rem;
`

export const NoteHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    align-items: center;

    input {
        margin-left: 0.5rem;
        padding-left: 1rem;
        font-size: 1.2rem;
        width: 90%;
        height: 3rem;
        outline: none;
        border: none;
        border-radius: 0.5rem;
        background-color: ${theme.whiteGlass};
    }
`

export const NoteBody = styled.div`
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    textarea {
        outline: none;
        padding-left: 1rem;
        padding-top: 1rem;
        font-family: inherit;
        border: none;
        background-color: ${theme.whiteGlass};
        border-radius: 0.5rem;
        width: 95%;
        height: 100%;
    }
`

export const NoteFooter = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 0.5rem;
    color: ${theme.textColor};

    p {
        font-size: 0.8rem;
    }
`

export const SaveButton = styled.button`
    width: 3rem;
    height: 2rem;
    border: none;
    outline: none;
    align-self: center;
    color: white;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    background-color: ${theme.primaryColor};

    
`