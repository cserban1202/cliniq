import { FormikHelpers, Form, Formik, yupToFormErrors } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import Map from '../Utils/Map'
import { categ3CreationDTO } from "./categ3.model";
import * as Yup from 'yup';


export default function Categ3Form(props: categ3Form){
    return (
        <Formik 
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object ({
            name: Yup.string().required('this is required').firstLetterUpperCase()
        })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name"/>

                    <div style={{marginBottom: '1rem'}}>
                          {/* <Map />   */}
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">
                        Save changes
                    </Button>
                    <Link className = "btn btn-secondary" to = "/CATEGORY3">Cancel</Link>
                </Form>
            )} 
        </Formik>
    )
}

interface categ3Form{
    model: categ3CreationDTO;
    onSubmit(values: categ3CreationDTO, actions: FormikHelpers<categ3CreationDTO>): void;
}