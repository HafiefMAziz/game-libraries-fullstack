import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";

const urls = "http://localhost:3000";
const handleLogin = () => {
  window.location.href = "/";
};
const LoginPage = (props) => {
  const { loginCbHandler } = props;
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: urls + "/users/login",
        data: forms,
      });
      const access_token = result.data.access_token;
      localStorage.setItem("access_token", access_token);
      handleLogin();

      loginCbHandler(true);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = () => {
    loginUser();
  };

  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });

    return () => {};
  }, []);

  return (
    <>
      <section class="forms-section">
        <h1 class="section-title">Login Page</h1>
        <div class="forms">
          <div class="form-wrapper is-active">
            <button type="button" class="switcher switcher-login">
              Login
              <span class="underline"></span>
            </button>
            <form class="form form-login">
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div class="input-block">
                  <label for="login-email">E-mail</label>
                  <input
                    onChange={(e) =>
                      setForms({ ...forms, email: e.target.value })
                    }
                    id="login-email"
                    type="email"
                  />
                </div>
                <div class="input-block">
                  <label for="login-password">Password</label>
                  <input
                    onChange={(e) =>
                      setForms({ ...forms, password: e.target.value })
                    }
                    id="login-password"
                    type="password"
                  />
                </div>
              </fieldset>
              <button
                onClick={() => submitHandler()}
                type="submit"
                class="btn-login"
              >
                Login
              </button>
            </form>
          </div>
          <div class="form-wrapper">
            <button type="button" class="switcher switcher-signup">
              Sign Up
              <span class="underline"></span>
            </button>
            <form class="form form-signup">
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div class="input-block">
                  <label for="signup-email">Username</label>
                  <input id="signup-email" type="username" required />
                </div>
                <div class="input-block">
                  <label for="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required />
                </div>
                <div class="input-block">
                  <label for="signup-password">Password</label>
                  <input id="signup-password" type="password" required />
                </div>
              </fieldset>
              <button type="submit" class="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
