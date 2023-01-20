import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom"
import Button from "../Utils/Button"
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { categoriesCreationDTO } from "./categories.model";

//NUMELE PROCEDURII PE CARE VREI SA O VEZI IN CLINCI SI NU ESTE DISPONIBILA
// <-------------SUGGESTIONS OF PROCEDURES---------------->
export default function CategoriesForm(props: categoriesFormProps) {
    return (
        <Formik initialValues = {props.model}
        onSubmit = {props.onSubmit}
        validationSchema = {Yup.object({
            name: Yup.string().required('This field is mandatory!')
            
            .firstLetterUpperCase()
        })}
        >
            {(formikProps) => ( //stop letting the user to send the form twice with the 
                                // dissabled property from the button
                                //!!!!NO MATTER HOW MANY TIMES THE BUTTON IS CLICKED,
                                //THE NAME IS TAKE ONLY ONCE!!!!!!
                                //--> Button: disabled -> isSubmitting is disabling the button
                                //                          button is getting enabled dupa ce se termina
                                //                          cele 3 secunde 
                <Form >
                    <TextField field ="name" displayName ="Here we go"></TextField>
                    <Button disabled = {formikProps.isSubmitting} type = 'submit'>Add</Button>
                    <Link className = "btn btn-secondary" to = "/Categories">Cancel</Link>
                
            </Form>
            )}
            
        </Formik>
    )
}

interface categoriesFormProps {
    model: categoriesCreationDTO;
    onSubmit(values: categoriesCreationDTO, action: FormikHelpers<categoriesCreationDTO>): void;
}

//FORMIKHELPERS --> second paramter onSubmit: we can access information about the form
//              --> action: part of the signature of the onSubmit, even there is no use 

//TAGS:
/*TEXTFIELD -> SUGGESTION NAME OR SMTH LIKE THAT
BUTTON -> ADD A NEW SUGGESTION!!!!!
*/