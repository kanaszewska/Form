import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../styles/Form.css";
import { ModalWrong } from "./Modal";

const LogIn = (props) => {
  const initialValue = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [cookies, setCookie] = useCookies();
  const [showWrong, setShowWrong] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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

    if (
      findArrayElementByEmail(users, formValues.email) &&
      findArrayElementByPassword(users, formValues.password)
    ) {
      navigate("/account");
      props.changeFlag(false);
    } else if (
      findArrayElementByEmail(users, formValues.email) &&
      !findArrayElementByPassword(users, formValues.password)
    ) {
      setShowWrong(true);
      setWrongPassword(false);
    } else if (
      !findArrayElementByEmail(users, formValues.email) &&
      !findArrayElementByPassword(users, formValues.password)
    ) {
      setShowWrong(true);
      setWrongPassword(true);
    }
  };

  const findArrayElementByEmail = (array, email) => {
    return array.find((element) => {
      if (element.email === email && email !== "") {
        return true;
      }
    });
  };

  const findArrayElementByPassword = (array, password) => {
    return array.find((element) => {
      if (element.password === password && password !== "") {
        return true;
      }
    });
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
            placeholder="Enter your email"
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
        <div>
          <div className="button-cointainer">
            <button className="button" type="submit" onClick={handleOnSubmit}>
              LOG IN
            </button>
            {showWrong ? (
              <ModalWrong showWrong={showWrong} onClose={handleOnClickWrong}>
                {wrongPassword ? (
                  <p>You must register!</p>
                ) : (
                  <p>Your password is wrong!</p>
                )}
              </ModalWrong>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
