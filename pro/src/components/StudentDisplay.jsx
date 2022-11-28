import React, { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

export default function StudentDisplay() {
  // const [id, setId] = useState(47)
  const [firstName, setFirstName] = useState("Apocalipsis");
  const [lastName, setLastName] = useState("Torres");
  const [student, setStudent] = useState([]);

  function updateStudentName(inputFirst, inputLast) {
    console.log("Hello");
    setFirstName(inputFirst);
    setLastName(inputLast);
  }

  useEffect(() => {
    console.log("UseEffect");
    fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
      });
  }, [firstName, lastName]);

  return (
    <div>
      <StudentForm updateStudentName={updateStudentName} />
      <h1 className="text-center">Kekambas Students</h1>
      <StudentTable student={student} />
    </div>
  );
}