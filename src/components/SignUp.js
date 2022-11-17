import React, { useState } from "react";
import "../styles/Form.css"

const Registration = () => {
  const initialValue = {
    name: "",
    surname: "",
    address: "",
    code: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      alert("Sign up is correct");
    }
    return;
  };

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexCode = /(^\d{2}-\d{3}$)/;

    if (!values.name) {
      errors.name = "Please provide a name";
    }
    if (!values.surname) {
      errors.surname = "Please provide a surname";
    }
    if (!values.address) {
      errors.address = "Please provide your address";
    }
    if (!values.code) {
      errors.code = "Please provide your address";
    } else if (!regexCode.test(values.code)) {
      errors.code = "Please provide a valid ZIP code.";
    }
    if (!values.city) {
      errors.city = "The city you entered is incorrect";
    }
    if (!values.email) {
      errors.email = "The email you entered is incorrect";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please provide a valid email address.";
    }
    if (!values.password) {
      errors.password = "The password you entered is incorrect";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "The confirm password you entered is incorrect";
    }
    return errors;
  };

  return (
    <div className="container">
      <form className="main">
        <h1>CREATE ACCOUNT</h1>
        <div className="details">
          <label>Name</label>
          <input
            className="nameInput"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            type="text"
            value={formValues.name}
          />
          <p>{formErrors.name}</p>
        </div>
        <div className="details">
          <label>Surname</label>
          <input
            className="surnameInput"
            name="surname"
            placeholder="Enter your surname"
            onChange={handleChange}
            type="text"
            value={formValues.surname}
          />
          <p>{formErrors.surname}</p>
        </div>
        <div className="details">
          <label>Address</label>
          <input
            className="addressInput"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
            type="text"
            value={formValues.address}
          />
          <p>{formErrors.address}</p>
        </div>
        <div className="details">
          <label>ZIP code</label>
          <input
            className="codeInput"
            name="code"
            placeholder="Enter your ZIP code"
            onChange={handleChange}
            type="text"
            value={formValues.code}
          />
          <p>{formErrors.code}</p>
        </div>
        <div className="details">
          <label>City</label>
          <input
            className="cityInput"
            name="city"
            placeholder="Enter your city"
            onChange={handleChange}
            type="text"
            value={formValues.city}
          />
          <p>{formErrors.city}</p>
        </div>
        <div className="details">
          <label>Email</label>
          <input
            className="emailInput"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            type="email"
            value={formValues.email}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="details">
          <label>Password</label>
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
        <div className="details">
          <label>Confirm Password</label>
          <input
            className="confirmPasswordInput"
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
            type="password"
            value={formValues.confirmPassword}
          />
          <p>{formErrors.confirmPassword}</p>
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
          <button className="button" type="submit" onClick={handleOnSubmit}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
