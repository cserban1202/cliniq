import { useState } from "react";
import { useHistory } from "react-router-dom";
import ConsultationForm from "./ConsultationForm";
import axios from "axios";
import { urlCategories4 } from "../endpoints";


export default function CreateCard() {

    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    async function create(category: consultationCreationDTO) {
        try {
            await axios.post(urlCategories4, category);
            history.push('/');
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }
    
    return  (
        <>
            <h3>Ask for a consultation</h3>
            <ConsultationForm 
                model={{name: '', wantedDate: undefined}}
                onSubmit={async values => {
                    await create(values);
                    console.log(values);
                }}
            />
        </>
    )
}