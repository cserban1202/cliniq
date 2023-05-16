import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import * as Yup from "yup";
import Datefield from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";
import MultipleSelector from "../forms/MultipleSelector";
import React, { useContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlDoctors } from "../endpoints";
import { doctorsDTO } from "./Doctors/doctorsDTO.model.d";
import "./Doctors/doctorsTable.css";
import DoctorTable from "./Doctors/DoctorField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthencationContext from "../auth/AuthenticationContext";

export default function ConsultationForm(props: consultationFormProps) {
  const [doctors, setDoctors] = useState<doctorsDTO[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>(() => {
    const storedTime = localStorage.getItem("selectedTime");
    return storedTime ? storedTime : "";
  });
  const [lastSubmissionTimestamp, setLastSubmissionTimestamp] =
    useState<number>(0);

  const { claims } = useContext(AuthencationContext);
  function getUserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }

  useEffect(() => {
    axios.get(urlDoctors).then((response: AxiosResponse<doctorsDTO[]>) => {
      setDoctors(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedTime", selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    axios.get(urlDoctors).then((response: AxiosResponse<doctorsDTO[]>) => {
      setDoctors(response.data);
      // console.log(response.data);
    });
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  };


  
  const handleSubmit = async (
    values: consultationCreationDTO,
    actions: FormikHelpers<consultationCreationDTO>
  ) => {
    const formattedDate = formatDate(values.wantedDate);
    const userEmail = getUserEmail();
    console.log(userEmail);
  
    const currentTimestamp = Date.now();
    const lastTimestamp = localStorage.getItem("lastSelectionTimestamp");
    const lastSelectedValue = localStorage.getItem("lastSelectedValue");
  
    if (
      !lastTimestamp ||
      currentTimestamp - Number(lastTimestamp) >= 86400000 ||
      selectedTime !== lastSelectedValue
    ) {
      // Allow submission
      localStorage.setItem("lastSelectionTimestamp", String(currentTimestamp));
      localStorage.setItem("lastSelectedValue", selectedTime);
  
      if (!values.description) {
        actions.setSubmitting(false);
        toast.error("Markdown field cannot be empty");
      } else {
        await props.onSubmit(
          { ...values, wantedDate: formattedDate, email: userEmail },
          actions,
          selectedTime
        );
        setSelectedTime("");
        setTimeout(() => {
          setSelectedTime("");
        }, 86400000); // hide the selected time slot for 24 hours
      }
    } else if (selectedTime === lastSelectedValue) {
      // Prevent submission
      actions.setSubmitting(false);
      alert("You have already selected this time slot");
    } else {
      // Prevent submission
      actions.setSubmitting(false);
      alert("You can select this value again in 24 hours");
    }
  };
  

  

  return (
    <div className="container-xl mt-5 pb-5">
      <ToastContainer />
      <Formik
        initialValues={props.model}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUpperCase(),
          wantedDate: Yup.date().nullable().required("This field is required"),
          description: Yup.string().required("This field is required"),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField displayName="Name" field="name" />
            <Datefield
              displayName="Wanted date for consultation"
              field="wantedDate"
            />
            <MarkdownField
              displayName="Brief description of the problem"
              field="description"
            />
            <DoctorTable
              doctors={doctors}
              selectedTime={selectedTime}
              onTimeSlotClick={setSelectedTime}
            />
            <Button
              disabled={!selectedTime || formikProps.isSubmitting}
              type="submit"
            >
              Ask for a consultation
            </Button>
            <Link to="/" className="btn btn-secondary">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

interface consultationFormProps {
  model: consultationCreationDTO;
  onSubmit(
    values: consultationCreationDTO,
    action: FormikHelpers<consultationCreationDTO>,
    selectedTime: string
  ): void;
}

// const handleSubmit = async (
//   values: consultationCreationDTO,
//   actions: FormikHelpers<consultationCreationDTO>
// ) => {
//   const formattedDate = formatDate(values.wantedDate);

//   const currentTimestamp = Date.now();
//   const lastTimestamp = localStorage.getItem("lastSubmissionTimestamp");
//   const lastSelectedTime = localStorage.getItem("lastSelectedTime");

//   if (
//     !lastTimestamp ||
//     currentTimestamp - Number(lastTimestamp) >= 60000 ||
//     selectedTime !== lastSelectedTime
//   ) {
//     // Allow submission
//     localStorage.setItem("lastSubmissionTimestamp", String(currentTimestamp));
//     localStorage.setItem("lastSelectedTime", selectedTime);
//     await props.onSubmit(
//       { ...values, wantedDate: formattedDate },
//       actions,
//       selectedTime
//     );
//     setSelectedTime("");
//     setTimeout(() => {
//       setSelectedTime("");
//     }, 60000); // hide the selected time slot for 1 minute
//   } else {
//     // Prevent submission
//     actions.setSubmitting(false);
//     alert("You can submit the form again in 1 minute");
//   }
// };

//       // -------------------->>>> AICI 24 DE ORE <<<<<--------------------
// const handleSubmit = async (
//   values: consultationCreationDTO,
//   actions: FormikHelpers<consultationCreationDTO>
// ) => {
//   const formattedDate = formatDate(values.wantedDate);

//   const currentTimestamp = Date.now();
//   const lastTimestamp = localStorage.getItem("lastSubmissionTimestamp");
//   const lastSelectedTime = localStorage.getItem("lastSelectedTime");

//   if (
//     !lastTimestamp ||
//     currentTimestamp - Number(lastTimestamp) >= 86400000 ||
//     selectedTime !== lastSelectedTime
//   ) {
//     // Allow submission
//     localStorage.setItem("lastSubmissionTimestamp", String(currentTimestamp));
//     localStorage.setItem("lastSelectedTime", selectedTime);
//     await props.onSubmit(
//       { ...values, wantedDate: formattedDate },
//       actions,
//       selectedTime
//     );
//     setSelectedTime("");
//     setTimeout(() => {
//       setSelectedTime("");
//     }, 86400000); // hide the selected time slot for 24 hours
//   } else {
//     // Prevent submission
//     actions.setSubmitting(false);
//     alert("You can submit the form again in 24 hours");
//   }
// };

// import { Form, Formik, FormikHelpers } from "formik";
// import { Link } from "react-router-dom";
// import TextField from "../forms/TextField";
// import Button from "../Utils/Button";
// import * as Yup from "yup";
// import Datefield from "../forms/DateField";
// import ImageField from "../forms/ImageField";
// import MarkdownField from "../forms/MarkdownField";
// import MultipleSelector from "../forms/MultipleSelector";
// import React, { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";
// import { urlDoctors } from "../endpoints";
// import { doctorsDTO } from "./Doctors/doctorsDTO.model.d";
// import "./Doctors/doctorsTable.css";
// import DoctorTable from "./Doctors/DoctorField";

// export default function ConsultationForm(props: consultationFormProps) {
//   const [doctors, setDoctors] = useState<doctorsDTO[]>([]);
//   const [selectedTime, setSelectedTime] = useState<string>("");

//   useEffect(() => {
//     axios.get(urlDoctors).then((response: AxiosResponse<doctorsDTO[]>) => {
//       setDoctors(response.data);
//       // console.log(response.data);
//     });
//   }, []);

//   const formatDate = (date: Date): string => {
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     return `${year}-${month < 10 ? "0" : ""}${month}-${
//       day < 10 ? "0" : ""
//     }${day}`;
//   };

//   return (
//     <Formik
//       initialValues={props.model}
//       onSubmit={(values, actions) => {
//         const formattedDate = formatDate(values.wantedDate);
//         props.onSubmit(
//           { ...values, wantedDate: formattedDate },
//           actions,
//           selectedTime
//         );
//       }}
//       validationSchema={Yup.object({
//         name: Yup.string()
//           .required("This field is required")
//           .firstLetterUpperCase(),
//         wantedDate: Yup.date().nullable().required("This field is required"),
//       })}
//     >
//       {(formikProps) => (
//         <Form>
//           <TextField displayName="Name" field="name" />
//           <Datefield
//             displayName="Wanted date for consultation"
//             field="wantedDate"
//           />
//           <MarkdownField
//             displayName="Brief description of the problem"
//             field="description"
//           />
//           <DoctorTable
//             doctors={doctors}
//             selectedTime={selectedTime}
//             onTimeSlotClick={setSelectedTime}
//           />
//           <Button disabled={!selectedTime || formikProps.isSubmitting} type="submit">
//             Ask for a consultation
//           </Button>
//           <Link to="/" className="btn btn-secondary">
//             Cancel
//           </Link>
//         </Form>
//       )}
//     </Formik>
//   );
// }
// interface consultationFormProps {
//   model: consultationCreationDTO;
//   onSubmit(
//     values: consultationCreationDTO,
//     action: FormikHelpers<consultationCreationDTO>,
//     selectedTime: string
//   ): void;
// }

{
  /* <span
  key={index}
  className={`time-slot ${
    time === selectedTime ? "selected" : ""
  }`}
  onClick={() => {
    setSelectedTime(time);
    console.log("Selected time:", time);
  }}
>
  {time}
</span> */
}

// import { Form, Formik, FormikHelpers } from "formik";
// import { Link } from "react-router-dom";
// import TextField from "../forms/TextField";
// import Button from "../Utils/Button";
// import * as Yup from "yup";
// import Datefield from "../forms/DateField";
// import ImageField from "../forms/ImageField";
// import MarkdownField from "../forms/MarkdownField";
// import MultipleSelector from "../forms/MultipleSelector";
// import React, { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";
// import { urlDoctors } from "../endpoints";
// import { doctorsDTO } from "./Doctors/doctorsDTO.model.d";
// import "./Doctors/doctorsTable.css";

// export default function ConsultationForm(props: consultationFormProps) {
//   const [doctors, setDoctors] = useState<doctorsDTO[]>([]);

//   useEffect(() => {
//     axios.get(urlDoctors).then((response: AxiosResponse<doctorsDTO[]>) => {
//       setDoctors(response.data);
//       console.log(response.data);
//     });
//   }, []);
//   return (
//     <Formik
//       initialValues={props.model}
//       onSubmit={props.onSubmit}
//       validationSchema={Yup.object({
//         name: Yup.string()
//           .required("This field is required")
//           .firstLetterUpperCase(),
//         wantedDate: Yup.date().nullable().required("This field is required"),
//       })}
//     >
//       {(formikProps) => (
//         <Form>
//           <TextField displayName="Name" field="name" />
//           <Datefield
//             displayName="Wanted date for consulation"
//             field="wantedDate"
//           />
//           {/* S */}
//           <MarkdownField
//             displayName="Brief description of the problem"
//             field="description"
//           />
//           {/* <MultipleSelector display="locations"
//                         nonSelected={[]}
//                         selected={[]}
//                         onChange={(selected, nonSelected) =>{

//                         }}
//                         /> */}
//           <div className="container">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Doctors</th>
//                   <th>Available Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {doctors.map((doctor) => (
//                   <tr key={doctor.id}>
//                     <td>{doctor.name}</td>
//                     <td>
//                       <div className="time-container">
//                         {[
//                           doctor.time,
//                           doctor.time2,
//                           doctor.time3,
//                           doctor.time4,
//                         ].map((time, index) => (
//                           <span key={index} className="time-slot">
//                             {time}
//                           </span>
//                         ))}
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <Button disabled={formikProps.isSubmitting} type="submit">
//             Ask for a consultation
//           </Button>
//           <Link to="/" className="btn btn-secondary">
//             Cancel
//           </Link>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// interface consultationFormProps {
//   model: consultationCreationDTO;
//   onSubmit(
//     values: consultationCreationDTO,
//     action: FormikHelpers<consultationCreationDTO>
//   ): void;
// }
