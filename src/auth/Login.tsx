import axios from "axios";
import React, { useContext, useState } from "react";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";
import { urlAccounts } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import { getClaims, saveToken } from "./handlerJWT";
import AuthencationContext from "./AuthenticationContext";
import { useHistory } from "react-router-dom";

export default function Login() {

    const [error, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthencationContext);
    const history = useHistory();

    async function login(credentials: userCredentials){
        try {
            setErrors([]); // clear errors!!!!!!!!!!!
            const response = await axios
            .post<authenticationResponse>(`${urlAccounts}/login`, credentials);
            saveToken(response.data);
            update(getClaims()); // update context
            history.push("/"); // redirect to home page
            console.log(response.data);
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }


    return (
        <>

        <h3>Login</h3>
        <DisplayErrors errors={error}/>
        <AuthForm 
            model = {{email: "", password: ""}}
            onSubmit={async values => await login(values)}
        />

        </>
    )
}