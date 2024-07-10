import React, { useEffect } from "react";
import { useRef, useState, UseEffect } from "react";
import { ContainerStyle } from "./styles/Container.style";
import { ButtonStyle } from "./styles/Button.style";
import { InputStyle } from "./styles/Container.style";
import { LabelStyle } from "./styles/Container.style";
import { NavbarMain } from "./NavbarMain";
import { HomePage } from "./HomePage";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [showHome, setShowHome] = useState(false);

  //focus on user field when page loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, []);

  function handleLogin(e) {
    console.log(e);
    e.preventDefault();
    const username = user;
    const password = pwd;

    const getUser = localStorage.getItem("Username");
    const getPassword = localStorage.getItem("Password");

    if ((username == "") & (password == "")) {
      alert("wrong");
    } else if ((username == getUser) & (password == getPassword)) {
      alert("Login successful");
      setShowHome(true);
    } else {
      alert("Something went wrong.");
    }
  }

  return (
    <>
      {showHome ? (
        <HomePage name={user} />
      ) : (
        <div>
          <NavbarMain></NavbarMain>
          <ContainerStyle>
            <section>
              <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
                {" "}
                {errMsg}
              </p>
              <h1>Sign In</h1>
              <form>
                <section>
                  <LabelStyle htmlFor="username">Username</LabelStyle>
                  <InputStyle
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    reuired
                    placeholder="Username"
                  />
                </section>

                <section>
                  <LabelStyle htmlFor="password">Password</LabelStyle>
                  <InputStyle
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    reuired
                    placeholder="Password"
                  />
                </section>
                <section>
                  <ButtonStyle onClick={handleLogin}>Sign In</ButtonStyle>
                </section>
              </form>
            </section>
          </ContainerStyle>
        </div>
      )}
    </>
  );
};
