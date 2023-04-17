import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "../../styles/main.scss";

function Login() {
  let [LoggedIssues, changeLoggedIssues] = useState(false);
  let issueElem = <div></div>;

  if (LoggedIssues === true) {
    issueElem = (
      <div className="issue-message mx-4 text-danger text-center">
        Invalid email or password.
      </div>
    );
  }

  let api_url_login = "http://localhost:8080/admin/login";
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let Enter = () => {
    axios
      .post(api_url_login, { username, password })
      .then((res) => {
        if (
          res.data.message === "password wrong try another time!" ||
          res.data.message === "login fail try another time"
        ) {
          changeLoggedIssues(true);
        } else if (
          res.data.message === "the user cannot login because he is deactivated"
        ) {
          swal({
            icon: "error",
            title: "Something went wrong...",
            text: "your account locked go to your manager!",
          });
        } else if (res.data.message === "login successfully") {
          localStorage.setItem("token", JSON.stringify(res.data.result.token));
          if (res.data.result.token) {
            navigate("/dashboard");
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          changeLoggedIssues(true);
          console.log("user not found");
        }
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    Enter();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="d-flex login-wrap flex-row justify-content-center align-items-center">
          <div className="row login-box">
            <div className="col-lg-7 login-box-part1 p-5">
              <div className="pt-lg-4">
                <h1 className="text-light pt-4 mt-lg-4 text-capitalize">
                  Forensics Fingerprint Elicitation System
                </h1>
                <p className="text-white-50 pt-3">
                  System For Fingerprint Determination
                </p>
              </div>
            </div>

            <div className="col-lg-5 login-box-part2 p-5">
              <h1 className="text-center form-title mb-4">SignIn Please!</h1>
              <form className="pt-2" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black-50"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setUsername(e.target.value)}
                    onClick={() => changeLoggedIssues(false)}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-black-50"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={() => changeLoggedIssues(false)}
                  />
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="btn text-light text-center mb-2 mt-3"
                  >
                    Login
                  </button>
                </div>
                {issueElem}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
