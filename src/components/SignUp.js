import React, { useState } from "react";
import { ModalCorrect, ModalWrong } from "./Modal";
import "../styles/Form.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [cookies, setCookie] = useCookies();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnClickCorrect = () => {
    setShowCorrect(false);
    setFormValues(initialValue);
    navigate("/Form");
  };

  const handleOnClickWrong = () => {
    setShowWrong(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(validate(formValues)).length !== 0 && isSubmit) return;

    let users = cookies.users;

    if (findArrayElementByEmail(users, formValues.email)) {
      setShowWrong(true);
    } else {
      setShowCorrect(true);
      users.push(formValues);
      setCookie("users", users);
    }
  };

  function findArrayElementByEmail(array, email) {
    return array.find((element) => {
      if (element.email === email) {
        return true;
      }
    });
  }

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
        <div>
          <button className="button" type="submit" onClick={handleOnSubmit}>
            SIGN UP
          </button>
          {showCorrect ? (
            <ModalCorrect
              showCorrect={showCorrect}
              onClose={handleOnClickCorrect}
            ><p>Sign up is correct</p></ModalCorrect>
          ) : null}
          {showWrong ? (
            <ModalWrong
              showWrong={showWrong}
              onClose={handleOnClickWrong}
            ><p>We already have an account with this email. Please enter a new email!</p></ModalWrong>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Registration;
