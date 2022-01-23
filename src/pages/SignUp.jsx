import React from "react"
import { Button, FormSignUp, Header, Input, Label, Sign } from "../styles/form";

const SignUp = () => {
    return (
        <>
            <Header>
                <h1>Welcome to Notes</h1>
            </Header>
            <FormSignUp>
            <Label htmlFor="name">
                    <h3>Name</h3>
                </Label>
                <Input 
                    type="name"
                    placeholder="Your Full Name"
                    name="name"
                    data-testid="name-sign-up"
                />
                <Label htmlFor="email">
                    <h3>Email</h3>
                </Label>
                <Input 
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    data-testid="email-sign-up"
                />
                <Label htmlFor="">
                    <h3>Password</h3>
                </Label>
                <Input 
                    type="password"
                    name="password"
                    data-testid="password-sign-up"
                />
                <Button >
                    REGISTER
                </Button>
                <Sign>
                    <p>Already Have an account? <a href="/">Sign In</a></p>
                </Sign>
            </FormSignUp>
        </>
    )
}

export default SignUp;