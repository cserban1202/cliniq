import "./disabled.css";
export default function DoctorTable(props: DoctorTableProps) {
  const { doctors, selectedTime, onTimeSlotClick, disabledTimes = [] } = props;

  const isDisabled = (time: string) => disabledTimes.includes(time);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Doctors</th>
            <th>Available Time</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>
                <div className="time-container">
                  {[doctor.time, doctor.time2, doctor.time3, doctor.time4].map(
                    (time, index) => (
                      <span
                        key={index}
                        className={`time-slot ${
                          time === selectedTime ? "selected" : ""
                        } ${isDisabled(time) ? "disabled" : ""}`}
                        onClick={() => {
                          if (isDisabled(time) || time === selectedTime) {
                            return;
                          }
                          onTimeSlotClick(time);
                        }}
                      >
                        {time}
                      </span>
                    )
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface Doctor {
  id: number;
  name: string;
  time: string;
  time2: string;
  time3: string;
  time4: string;
}

interface DoctorTableProps {
  doctors: Doctor[];
  selectedTime: string;
  onTimeSlotClick: (time: string) => void;
  disabledTimes?: string[];
}



interface Doctor {
  id: number;
  name: string;
  time: string;
  time2: string;
  time3: string;
  time4: string;
}
interface DoctorTableProps {
  doctors: Doctor[];
  selectedTime: string;
  onTimeSlotClick: (time: string) => void;
  disabledTimes?: string[]; // add this prop
} 

// export default function DoctorTable(props: DoctorTableProps) {
//   const { doctors, selectedTime, onTimeSlotClick } = props;

//   return (
//     <div className="container">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Doctors</th>
//             <th>Available Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor) => (
//             <tr key={doctor.id}>
//               <td>{doctor.name}</td>
//               <td>
//                 <div className="time-container">
//                   {[doctor.time, doctor.time2, doctor.time3, doctor.time4].map(
//                     (time, index) => (
//                       <span
//                         key={index}
//                         className={`time-slot ${
//                           time === selectedTime ? "selected" : ""
//                         }`}
//                         onClick={() => onTimeSlotClick(time)}
//                       >
//                         {time}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }





// export default function DoctorTable(props: DoctorTableProps) {
//   const { doctors, selectedTime, onTimeSlotClick } = props;

//   return (
//     <div className="container">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Doctors</th>
//             <th>Available Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor) => (
//             <tr key={doctor.id}>
//               <td>{doctor.name}</td>
//               <td>
//                 <div className="time-container">
//                   {[doctor.time, doctor.time2, doctor.time3, doctor.time4].map(
//                     (time, index) => (
//                       <span
//                         key={index}
//                         className={`time-slot ${
//                           time === selectedTime ? "selected" : ""
//                         }`}
//                         onClick={() => onTimeSlotClick(time)}
//                       >
//                         {time}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// interface Doctor {
//   id: number;
//   name: string;
//   time: string;
//   time2: string;
//   time3: string;
//   time4: string;
 
// }
// interface DoctorTableProps {
//   doctors: Doctor[];
//   selectedTime: string;
//   onTimeSlotClick: (time: string) => void;
// }


