import { Field, Form, Formik } from "formik"
import { categoriesDTO } from "../CATEGORY1/categories.model"
import Button from "../Utils/Button";

export default function FilterCards() {

    const initialValues: filterCardsForm ={
        title: '',
        cardId: 0,
        field3: false,
        field4: false
    }


    const categories: categoriesDTO[] =[{
        id: 1, 
        name: "Name 1"
    },
    {
        id: 2, 
        name: "name 2"
    }];


    return (
        <>
            <h3>Filter Cards</h3>
            <Formik 
            initialValues={initialValues}
            onSubmit = {values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <input type = "text" className = "form-control" id = "title"
                                    placeholder="title ..."
                                    {...formikProps.getFieldProps("title")}
                                    />
                            </div>
                            <div className="col-auto">
                                <select className="form-select"
                                {...formikProps.getFieldProps("cardId")}
                                >
                                    <option value="0">--Choose an option--</option>
                                    {categories.map(category => <option key ={category.id}
                                    value={category.id}>
                                    {category.name}
                                    </option>)}
                                </select>
                            </div>

                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className ="form-check-input" id="field3"
                                    name="field3" type ="checkbox"/>
                                    <label className="form-check-label"
                                    htmlFor ="field3">Field 3</label>
                                </div>
                            </div>

                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className ="form-check-input" id="field4"
                                    name="field4" type ="checkbox"/>
                                    <label className="form-check-label"
                                    htmlFor ="field4">Field 4</label>
                                </div>
                            </div>

                            <div className="col-auto">
                                <Button className = "btn btn-primary"
                                onClick = {() => formikProps.submitForm()}>Filter</Button>
                                <Button className = "btn btn-danger ms-3"
                                onClick = {() => formikProps.setValues(initialValues)}>Clear</Button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface filterCardsForm {
    title: string;
    cardId: number;
    field3: boolean;
    field4: boolean;
}

//for FORMIK to integrate input (type text), we need to pass some attributes
//          -->getFieldProps = short method of doing this.