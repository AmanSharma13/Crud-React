import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState('')

  function handleDelete(id) {
    axios
      .delete(`https://6301d4759a1035c7f807ac2c.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }

  function getData() {
    axios
      .get("https://6301d4759a1035c7f807ac2c.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div class="form-check form-switch">
       <input class="form-check-input" type="checkbox" role="switch" onClick={()=>{
            if(tableDark === 'table-dark'){
                setTableDark("")
            }else{
                setTableDark("table-dark");
            }
        }} />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/create">
          <button className="btn btn-primary">Add Data</button>
        </Link>
      </div>

      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
