import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./login.css";
import { registerUser } from "../../fetchs/gamesFetch";

const urls = "http://localhost:3000";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const { loginCbHandler } = props;
  const handleLogin = () => {
    window.location.href = "/dashboard/games";
  };
  const handleUser = () => {
    window.location.href = "/";
  };
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
      const level = result.data.level;
      const username = result.data.username
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("level", level);
      localStorage.setItem("username", username);

      if (level === "admin") {
        handleLogin();
        loginCbHandler(true);
      } else {
        handleUser();
        loginCbHandler(true);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "check your email or password",
      });
    }
  };

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = () => {
    loginUser();
  };
  const registerHandler = () => {
    registerUser(register);
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
                  <input
                    onChange={(e) =>
                      setRegister({ ...register, username: e.target.value })
                    }
                    id="signup-email"
                    type="username"
                  />
                </div>
                <div class="input-block">
                  <label for="signup-email">E-mail</label>
                  <input
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                    id="signup-email"
                    type="email"
                  />
                </div>
                <div class="input-block">
                  <label for="signup-password">Password</label>
                  <input
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                    id="signup-password"
                    type="password"
                  />
                </div>
              </fieldset>
              <button
                onClick={() => registerHandler()}
                type="submit"
                class="btn-signup"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
