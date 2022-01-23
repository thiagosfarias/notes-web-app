import React, { useState } from "react"
import { Button, Form, Header, Input, Label, Sign } from "../styles/form";
import axios from 'axios';

const SignIn = () => {

    const login =  async () => {
        const userEmail = document.getElementById("email-id").value;
        const userPass = document.getElementById("password-id").value;

        const user = {
            email: userEmail,
            password: userPass
        }

        const response = await axios.post(`http://localhost:8080/users/login`, user);
        
        console.log(response);

        

    }

    return (
        <>
            <Header>
                <h1>Welcome to Notes</h1>
            </Header>
            <Form>
                <Label htmlFor="name">
                    <h3>Email</h3>
                </Label>
                <Input
                    type="email"
                    id="email-id"
                    placeholder="your@email.com"
                    name="email"
                    data-testid="email-signi-in"
                />
                <Label htmlFor="">
                    <h3>Password</h3>
                </Label>
                <Input
                    id="password-id"
                    type="password"
                    name="password"
                    data-testid="password-signi-in"
                />
                <Button onClick={_ => login()} type="button">
                    LOGIN
                </Button>
                <Sign>
                    <p>New to Notes? <a href="/signup">Create account</a></p>
                </Sign>
            </Form>
        </>

    )
}

export default SignIn;