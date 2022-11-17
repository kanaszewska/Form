import React, { useState } from "react";
import "../styles/Form.css"

const Form = () => {
  const initialValue = {
    email: "",
    password: "",
    accept: false,
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(validate(formValues)).length === 0 && isSubmit) {
      alert("Log in is correct");
    }
    return;
  };

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "The email you entered is incorrect";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please provide a valid email address.";
    }
    if (!values.password) {
      errors.password = "The password you entered is incorrect";
    }
    return errors;
  };

  return (
    <div className="container">
      <form className="form">
        <h1>MEMBER LOGIN</h1>
        <div className="details">
          <label>Email</label>
          <input
            className="emailInput"
            name="email"
            placeholder="Enter your name"
            onChange={handleChange}
            type="email"
            value={formValues.email}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="details">
          <label>Hasło</label>
          <input
            className="passwordInput"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            type="password"
            value={formValues.password}
          />
          <p>{formErrors.password}</p>
        </div>
        <div className="accept">
          <label>
            <input
              className="accept"
              name="accept"
              onChange={handleChange}
              type="checkbox"
              value={formValues.accept}
            />
            Keep me logged in
          </label>
        </div>
        <div>
          <div className="button-cointainer">
            <button className="button" type="submit" onClick={handleOnSubmit}>
              LOG IN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
