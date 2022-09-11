import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Acess-Control-Allow-origin": "*" };

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://6301d4759a1035c7f807ac2c.mockapi.io/crud-youtube", {
      name: name,
      email: email,
      header,
    }).then(()=>{

        history("/read");
    })
  };
  return (
    <>
    <div className="d-flex justify-content-between m-2">
    <h2>Create</h2>
    <Link to="/read">
    <button className="btn btn-primary">Show Data</button>
    </Link>
    </div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setName(e.target.value)}
            aria-describedby="name"
          />
          <div id="name" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

    </>
  );
};

export default Create;
