import React, { useState } from "react";
import "./disabled.css";
import { Modal, Button } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";


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

export default function DoctorTable(props: DoctorTableProps) {
  const { doctors, selectedTime, onTimeSlotClick, disabledTimes = [] } = props;

  const isDisabled = (time: string) => disabledTimes.includes(time);

  // State for managing modal visibility and selected doctor
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Function to handle opening the modal and setting the selected doctor
  const openModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  // Function to handle saving the edited times
   const saveTimes = () => {
    // Perform the necessary logic to save the edited times
    // You can access the selected doctor and the updated times from the state
    // After saving, you can close the modal and update the UI if needed
    console.log(selectedDoctor); // Log the selectedDoctor object to the console
    setShowModal(false);
  };

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
                  {/* Add Edit button to open the modal */}
                  {/* <Button variant="primary" onClick={() => openModal(doctor)}>
                    Edit
                  </Button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for editing times */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Times</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render form inputs to edit the times */}
          {selectedDoctor && (
            <div>
              <p>Doctor: {selectedDoctor.name}</p>
              <div className="time-container">
                {[
                  selectedDoctor.time,
                  selectedDoctor.time2,
                  selectedDoctor.time3,
                  selectedDoctor.time4,
                ].map((time, index) => (
                  <input
                    key={index}
                    type="text"
                    className={`time-slot ${
                      time === selectedTime ? "selected" : ""
                    } ${isDisabled(time) ? "disabled" : ""}`}
                    value={time}
                    onChange={(e) => {
                      const updatedTimes = [
                        ...[
                          selectedDoctor.time,
                          selectedDoctor.time2,
                          selectedDoctor.time3,
                          selectedDoctor.time4,
                        ],
                      ];
                      updatedTimes[index] = e.target.value;
                      setSelectedDoctor({
                        ...selectedDoctor,
                        time: updatedTimes[0],
                        time2: updatedTimes[1],
                        time3: updatedTimes[2],
                        time4: updatedTimes[3],
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveTimes}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
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
