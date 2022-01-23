import styled from "styled-components";
import theme from "../theme";

export const UserProfile = styled.section`
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    height: 40rem;
    width: 30%;
    background-color: ${theme.whiteGlass};
    border-radius: 0.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
`

export const UserInfo = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    margin-left: 0.5rem;
    font-size: 0.9rem;
    align-items: center;

    .logo{
        width: 3rem;
        height: 3rem;
        background-color: ${theme.logoColor};
        align-items: center;
        align-self: center;
        justify-content: center;
        border-radius: 50%;

        p {
            text-align: center;
            font-weight: 600;
            font-size: 1rem;
        }
    }

    .user-info{
        margin-left: 1rem;

        p {
            margin: 0;
            color: ${theme.textColor}
        }
    }
`

export const UserNotes = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 1fr;

`

export const NoteButton = styled.button`
    width: 3rem;
    height: 2rem;
    border: none;
    align-self: center;
    color: white;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    background-color: ${theme.primaryColor};

`

export const NoteList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: scroll;
`

export const NoteCard = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.textColor};
    font-size: 0.85em;
    background-color: ${theme.whiteGlass};
    height: 25%;
    border-radius: 0.5rem;
    width: 95%;
    margin: auto;

    .header {
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        align-items: center;

        .delete{
            margin-left: 1rem;
            color: ${theme.deleteColor};
        }
    }

    h3, p, q {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        text-align: justify;
    }

    p{
        font-size: 0.78em;
    }

    @media only screen and (max-width: 615px){
        p, q {
            display: none;
        }

        width: 8rem;
        height: 3rem;
        margin-left: 1rem;

        .delete {
            margin-right: 1rem;
        }
    }
`