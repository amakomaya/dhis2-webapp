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
  // const confirmDelete = (user) => {
  //   window.confirm(`Delete ${user.fmname} ${user.lname}'s records. You won't be able to revert this!`) &&
  //     axios.delete(`/api/del/${user.id}`)
  //       .then(response => {
  //         fetchData();
  //         alert("Record deleted successfully");
  //       })
  //       .catch(error => {
  //         console.error("Failed to delete", error);
  //         alert("Failed to delete");
  //       });
  // };

  // const showForm = (token) => {
  //   window.open('/local-support/edit/' + token, '_blank');
  // };


  return (
    <>
      <Navbar />
      <div className="container mt-4"> 
        <div className="row justify-content-center"> 
          <div className="col-md-12">

            <table className="table table-sm table-bordered table-hover dataTable_wrapper text-center dataTables-example">
              <thead className="thead-light">
                <tr>
                  <th>S.N</th>
                  <th>Email</th>
                  
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                
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
