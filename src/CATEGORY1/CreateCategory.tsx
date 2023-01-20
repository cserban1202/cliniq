import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlCategories } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import { categoriesCreationDTO } from "./categories.model";
import CategoriesForm from "./CategoriesForm";


export default function CreateCategory() {

    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(category: categoriesCreationDTO) {
        try {
            await axios.post(urlCategories, category);
            history.push('/categories');
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }
    return (
        <>
            <h3>We'd love to listen</h3> 
            <DisplayErrors errors={errors} />
            <CategoriesForm model={{name:''}}
            onSubmit = {async value => {
               await create(value);
               //console.log(value)
            }}
            />
        </>
    )
}
/*
 1 -> h3: SUGGETIONS TITLE
 */