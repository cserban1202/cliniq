import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import * as Yup from "yup";
import Datefield from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";
import MultipleSelector from "../forms/MultipleSelector";

export default function ConsultationForm(props: consultationFormProps){
    return (
            <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUpperCase(),
                wantedDate: Yup.date().nullable().required('This field is required')
            })}
            >
                {(formikProps) => (
                    <Form>
                        <TextField displayName="Name" field="name" />
                        <Datefield displayName="Wanted date for consulation" field ="wantedDate"/>
                        {/* S */}
                        <MarkdownField displayName="Brief description of the problem" field="description" />
                        {/* <MultipleSelector display="locations"
                        nonSelected={[]}
                        selected={[]}
                        onChange={(selected, nonSelected) =>{ 

                        }}
                        /> */}

                        <Button disabled={formikProps.isSubmitting}
                            type="submit"
                        >Ask for a consultation</Button>
                        <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </Form>
                )}
            </Formik>
    )
}

interface consultationFormProps {
    model: consultationCreationDTO;
    onSubmit(values: consultationCreationDTO, action: FormikHelpers<consultationCreationDTO>): void;
}