import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import AOS from 'aos';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css';

const SendNewsletter = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('api/newsletter/list')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const showForm = (id) => {
    window.open(`/newsletter/${id}` , '_blank');
  };



  const sendNewsletter = (newsletter_id) => {
    axios.get(`api/send-newsletter/${newsletter_id}`)
    .then(response => {
        if (response.status === 200) {
            toast.success(
                <div>
                    <strong>Newsletter Send Successfully!</strong><br/><br/>
                </div>
            );
        }
    })
    .catch(error => {
      console.error("Failed to delete", error);
      alert("Failed to delete");
    });  
};


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
                  <th>Newsletter Id</th>
                  <th>Subject</th>
                  <th>Date</th>
            
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.newsletter_id}</td>
                    <td>{user.subject}</td>
                    <td>{user.date}</td>
                    
                    <td>
                    <div>
                        <button className="btn btn-primary btn-sm" type="button" title="Edit" onClick={() => sendNewsletter(user.newsletter_id)}>
                        Send Newsletter
                        </button>
                      
                      </div>
                      <div className="p-1">
                        <button className="btn btn-primary btn-sm" type="button" title="Edit" onClick={() => showForm(user.encrypted_newsletter_id)}>
                        Edit
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

export default SendNewsletter;
