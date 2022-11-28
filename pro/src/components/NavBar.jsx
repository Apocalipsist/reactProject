import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Kekambas | 102
        </a>
        <form action="">
            <div className="col-6 my-2 bg-white">
                <input
                type="text"
                name="first"
                className="w-100 form-control"
                placeholder="Enter First Name"
                />
            </div>
        </form>
        <div>
            <input classname="form-control me-2" type="text" name="search" id="searchBar" />
            <button className="btn btn-outline-primary" type="submit">Enter</button>
        </div>
      </div>
    </nav>
  );
}
