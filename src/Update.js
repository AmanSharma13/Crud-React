import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6301d4759a1035c7f807ac2c.mockapi.io/crud-youtube/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
   
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={name}
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
            value={email}
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
          onClick={handleUpdate}
          type="submit"
          className="btn btn-primary"
        >
          Update
        </button>
        <Link to={"/read"}>
          <button type="submit" className="btn btn-success m-2">
            Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
