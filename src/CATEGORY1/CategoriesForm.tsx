import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { categoriesCreationDTO } from "./categories.model";
import React from "react";

//NUMELE PROCEDURII PE CARE VREI SA O VEZI IN CLINCI SI NU ESTE DISPONIBILA
// <-------------SUGGESTIONS OF PROCEDURES---------------->
export default function CategoriesForm(props: categoriesFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is mandatory!"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName=""></TextField>
          <Button
            disabled={formikProps.isSubmitting}
            className="btn btn-info"
            type="submit"
          >
            Add
          </Button>
          <Link className="btn btn-secondary" to="/Categories">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface categoriesFormProps {
  model: categoriesCreationDTO;
  onSubmit(
    values: categoriesCreationDTO,
    action: FormikHelpers<categoriesCreationDTO>
  ): void;
}

//FORMIKHELPERS --> second paramter onSubmit: we can access information about the form
//              --> action: part of the signature of the onSubmit, even there is no use

//TAGS:
/*TEXTFIELD -> SUGGESTION NAME OR SMTH LIKE THAT
BUTTON -> ADD A NEW SUGGESTION!!!!!
*/
