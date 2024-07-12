import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { NavbarMain } from "./NavbarMain";
import { HomePage } from "./HomePage";
import { useNavigate } from "react-router";
import { Container } from "reactstrap";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [showHome, setShowHome] = useState(false);
  const history = useNavigate();

  //focus on user field when page loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    const username = user;
    const password = pwd;
    console.log(user, pwd);

    const getUser = localStorage.getItem("Username");
    const getPassword = localStorage.getItem("Password");

    if ((username == "") & (password == "")) {
      alert("You entered wrong information.");
    } else if ((username == getUser) & (password == getPassword)) {
      alert("Login successful");
      setShowHome(true);
      history("/homepage");
    } else {
      alert("Something went wrong.Please login again");
    }
  }

  return (
    <>
      {showHome ? (
        <HomePage name={user} />
      ) : (
        <Container className="logindiv">
          <NavbarMain></NavbarMain>
          <div className="login">
            <section>
              <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
                {" "}
                {errMsg}
              </p>
              <h3 style={{ margin: "50px 30px 30px 170px", width: "70%" }}>
                Sign In
              </h3>
              <form>
                <section>
                  {/* <LabelStyle htmlFor="username">Username</LabelStyle> */}
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    reuired
                    placeholder="Username"
                    style={{ margin: "30px 70px 0 70px", width: "70%" }}
                  />
                </section>

                <section>
                  {/* <LabelStyle htmlFor="password">Password</LabelStyle> */}
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    reuired
                    placeholder="Password"
                    style={{ margin: "30px 70px 0 70px", width: "70%" }}
                  />
                </section>
                <section>
                  <button
                    className="btn btn-lg fw-bold"
                    style={{
                      backgroundColor: "#fca993",
                      margin: "50px 70px 0 170px",
                    }}
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </section>
              </form>
            </section>
          </div>
        </Container>
      )}
    </>
  );
};
