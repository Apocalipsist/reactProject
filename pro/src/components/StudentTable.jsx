import React from "react";

export default function StudentTable(props) {
  let tableHeaders = ["Student ID", "First Name", "Last Name"];
  return (
    <table className="table table-striped my-3">
      <thead>
        <tr className="bg-success text-white">
          {tableHeaders.map((th, i) => (
            <th key={i}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.student.map((students) => (
          <tr key={students.id}>
            <th className="col border-end border-start">{students.id}</th>
            <td className="col border-end border-start">
              {students.first_name}
            </td>
            <td className="col border-end border-start">
              {students.last_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}