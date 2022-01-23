import styled from "styled-components";
import theme from "../theme";

export const Header = styled.header`

    h1{
        color: ${theme.textColor};
        font-weight: 500;
        text-align: center;
    }
`

export const FormSignUp = styled.form`
    width: 30rem;
    height: 25rem;
    background-color: ${theme.whiteGlass};
    border-radius: 0.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: auto;

    :hover{
        box-shadow: 1px 1px 2px grey;
    }

    h3 {
        color: ${theme.textColor};
        font-size: 1rem;
        text-align: left;
    }

    p {
        font-size: 0.7rem;
    }

`

export const Form = styled.form`
    width: 30rem;
    height: 22rem;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    margin: auto;

    :hover{
        box-shadow: 1px 1px 2px grey;
    }

    #sign-up-form{
        height: 25rem;
    }
    

    h3 {
        color: ${theme.textColor};
        font-size: 1rem;
        text-align: left;
    }

    p {
        font-size: 0.7rem;
    }

`

export const Label = styled.label`
    margin-top: 0.5rem;
    margin-left: 1rem;
    font-size: 0.8rem;

`

export const Input = styled.input`
    margin-left: 1rem;
    margin-bottom: 0;
    outline: none;
    font-size: 0.8px;
    text-align: left;
    height: 2rem;
    width: 90%;
    border: none;
    border-radius: 0.5rem;
    border-bottom: solid 1px gray;
    font-size: 0.8rem;
    padding-left: 1rem;
    ::placeholder{
        font-size: 0.8rem;
    }
`

export const Button = styled.button`
    width: 6rem;
    height: 2rem;
    background-color: ${theme.primaryColor};
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: auto;
`

export const Sign = styled.div`
    margin: auto;
    p {
        color: gray;
    }
    a {
        text-decoration: none;
        color: ${theme.primaryColor};
    }
`