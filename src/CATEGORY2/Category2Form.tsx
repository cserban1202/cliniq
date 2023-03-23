import { Form, Formik, FormikHelpers } from "formik";
import { categ2CreationDTO } from "./categ2.model";
import * as Yup from 'yup';
import Button from "../Utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import React from "react";

export default function Category2Form(props: category2FormProps){
    return (
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('This field is required'),//.firstLetterUpperCase(),
            consultationDate: Yup.date().required('This field is required').nullable(),
            // picture: Yup.mixed().required()
        })}
        >
            {(formikProps) => (
                <Form>
                    
                    <TextField displayName="Review" field="name" />
                    <DateField displayName="Consultation Date" field="consultationDate" />
                    <ImageField displayName="Picture" field="picture" 
                        imageURL={props.model.pictureURL} 
                    />

                    <Button disabled = {formikProps.isSubmitting}  className="btn btn-info" type = 'submit'>Save Changes</Button>
                    <Link className = "btn btn-secondary" to = "/Categories">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface category2FormProps { 
    model: categ2CreationDTO;
    onSubmit(values: categ2CreationDTO, actions: FormikHelpers<categ2CreationDTO>): void;
}