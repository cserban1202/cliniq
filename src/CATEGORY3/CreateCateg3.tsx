import React from "react";
import Categ3Form from "./Categ3Form";


//ASK FOR A CONSULATION 
export default function CreateCateg3() {
    return (
        <>
            <h3>Create CATEGORY3</h3>
            <Categ3Form 
                model={{name: ''}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}