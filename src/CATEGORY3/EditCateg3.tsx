import React from "react";
import Categ3Form from "./Categ3Form";

export default function EditCateg3() {
    return (
        <>
            <h3>Edit CATEG3</h3>
            <Categ3Form 
                model={{name: 'Sanador'}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}