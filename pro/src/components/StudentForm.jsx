import React from "react";

export default function StudentForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    let first = e.target.first.value;
    let last = e.target.last.value;
    props.updateStudentName(first, last);
  }

  return (
    <form className="row my-3" onSubmit={handleSubmit}>
      <div className="col-6 my-2">
        <input
          type="text"
          name="first"
          className="w-100 form-control"
          placeholder="Enter First Name"
        />
      </div>
      <div className="col-6 my-2">
        <input
          type="text"
          name="last"
          className="w-100 form-control"
          placeholder="Enter Last Name"
        />
      </div>
      <div className="col">
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </div>
    </form>
  );
}