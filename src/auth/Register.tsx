import React, { useState } from "react";
import { authenticationResponse, userCredentials } from "./auth.models";
import axios from "axios";
import { urlAccounts } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handlerJWT";
import AuthencationContext from "./AuthenticationContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
export default function Register(){

    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthencationContext);
    const history = useHistory();

    async function register(credentials: userCredentials){
        try {
            const response = await axios
            .post<authenticationResponse>(`${urlAccounts}/create`, credentials)
            saveToken(response.data)
            update(getClaims());
            console.log(response.data)
            history.push('/')
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Register</h3>
            <DisplayErrors errors={errors}/>
            <AuthForm
            model={{email:"", password:""}}
            onSubmit={async values =>await register(values)}
            />
            <span>Please remember:
                <ul>
                    <li>Include at least one non alphanumeric character.</li>
                    <li>Have at least one lower case.</li>
                    <li>Have at least one upper case.</li>
                </ul>
            </span>
        </>
    )
}