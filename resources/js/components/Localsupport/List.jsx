import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('api/local-support/list')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const confirmDelete = (user) => {
    window.confirm(`Delete ${user.fmname} ${user.lname}'s records. You won't be able to revert this!`) &&
      axios.delete(`/api/del/${user.id}`)
        .then(response => {
          fetchData();
          alert("Record deleted successfully");
        })
        .catch(error => {
          console.error("Failed to delete", error);
          alert("Failed to delete");
        });
  };

  const showForm = (token) => {
    window.open('/local-support/edit/' + token, '_blank');
  };


  return (
    <>
      <Navbar />
      <div className="container mt-4"> {/* Add margin top */}
        <div className="row justify-content-center"> {/* Center the table horizontally */}
          <div className="col-md-12">

            <table className="table table-sm table-bordered table-hover dataTable_wrapper text-center dataTables-example">
              <thead className="thead-light">
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Province</th>
                  <th>District</th>
                  <th>Municupality</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.fmname} {user.lname}</td>
                    <td>{user.phone}</td>
                    <td>{user.province_name}</td>
                    <td>{user.district_name}</td>
                    <td>{user.municipality_name}</td>
                    <td>
                      {/* Buttons for actions */}
                      <div>
                        <button className="btn btn-primary btn-sm" type="button" title="Edit" onClick={() => showForm(user.token)}>
                        Edit
                        </button>
                      </div>
                      <div className="p-1">
                        <button className="btn btn-sm btn-danger" type="button" title="Delete" onClick={() => confirmDelete(user)}>
                        Delete   
                       </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
