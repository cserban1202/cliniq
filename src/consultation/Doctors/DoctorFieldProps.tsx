import React from "react";

interface DoctorFieldProps {
  time: string;
  isTimeDisabled: (time: string) => boolean;
  handleClick: (time: string) => void;
}

export default function DoctorField(props: DoctorFieldProps) {
  const { time, isTimeDisabled, handleClick } = props;

  return (
    <span
      className={`time-slot ${isTimeDisabled(time) ? "disabled" : ""}`}
      onClick={() => handleClick(time)}
    >
      {time}
    </span>
  );
}
