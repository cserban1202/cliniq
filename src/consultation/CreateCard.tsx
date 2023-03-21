import { useState } from "react";
import { useHistory } from "react-router-dom";
import ConsultationForm from "./ConsultationForm";
import axios from "axios";
import { urlCategories4, urlConsultation } from "../endpoints";
import React from "react";


export default function CreateCard() {

      const [errors, setErrors] = useState<string[]>([]);
      const history = useHistory();
    
      async function create(category: consultationCreationDTO) {
        try {
          await axios.post(urlConsultation, category);
          history.push("/");
        } catch (error: any) {
          if (error && error.response) {
            console.log(error.response.data)
            setErrors(error.response.data);
          }
        }
      }
    
    return (
      <>
        <h3>Ask for a consultation</h3>
        <ConsultationForm 
          model={{name: '', wantedDate: undefined, time: ''}}
          onSubmit={async (values, actions, time) => {
            const category = { ...values, time };
           await create(category);
            console.log(category);
          }}
          
        />
      </>
    );
  }
  

// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import ConsultationForm from "./ConsultationForm";
// import axios from "axios";
// import { urlCategories4 } from "../endpoints";
// import React from "react";


// export default function CreateCard() {

//     const [errors, setErrors] = useState<string[]>([]);
//     const history = useHistory();

//     async function create(category: consultationCreationDTO) {
//         try {
//             await axios.post(urlCategories4, category);
//             history.push('/');
//         }
//         catch (error: any) {
//             if (error && error.response){
//                 setErrors(error.response.data);
//             }
//         }
//     }
    
//     return  (
//         <>
//             <h3>Ask for a consultation</h3>
//             <ConsultationForm 
//                 model={{name: '', wantedDate: undefined}}
//                 onSubmit={async values => {
//                     await create(values);
//                     console.log(values);
//                 }}
//             />
//         </>
//     )
// }