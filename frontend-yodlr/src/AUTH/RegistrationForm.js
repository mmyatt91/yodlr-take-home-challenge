import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UsersAPI from '../API/UsersAPI';
import Alert from '../COMMON/Alert';


// Registration Form 
// Routed @ '/register'

function RegistrationForm({ registerUser }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: ""
  });

  const [formErrors, setFormErrors] = useState([])

  // Updates form field data
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  // Handles form submission by calling the registerUser function prop
  // and redirects to Home ('/') route, if registration is successful
  async function handleSubmit(evt) {
    evt.preventDefault();
    let res = await UsersAPI.registerUser(formData);
    if(res.success) {
      history.push('/')
    } else {
      setFormErrors(res.errors)
    }
  }

  return (
    <div className="RegistrationForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="mb-3">Register Here</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="name"
                  name="firstName"
                  class="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="name"
                  name="lastName"
                  class="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {formErrors.length 
                ? <Alert type="danger" message={formErrors} />
                : null}

              <button
                className= "btn btn-primary float-right"
                type="submit"
                onSubmit={handleSubmit}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;