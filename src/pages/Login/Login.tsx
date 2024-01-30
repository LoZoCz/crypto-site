import Header from "../../components/header/Header";
import eyeOffIcon from "../../assets/images/icons/eye-off.svg";
import eyeOnIcon from "../../assets/images/icons/eye.svg";
import Button from "../../components/Button";
import { useState } from "react";
import UserInput from "../../components/UserInput";
import UserLink from "../../components/UserLink";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("rejestracja");
  };

  return (
    <>
      <Header />
      <main className="login__main">
        <form
          className="login__main-form glassyBg"
          onSubmit={(e) => handeSubmit(e)}
        >
          <h1 className="login__main-title h1">Witamy z powrotem!</h1>
          <div className="login__main-inpBox">
            <div className="login__main-loginInpBox">
              <UserInput
                type="text"
                placeholder="Login"
                name="login"
                addClasses={["login__main-textInp"]}
              />
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="login__main-passInpBox">
              <UserInput
                addClasses={["login__main-textInp"]}
                type={passwordVisible ? "text" : "password"}
                placeholder="Hasło"
              />
              <button
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="passInp__btn"
              >
                <img
                  src={passwordVisible ? eyeOnIcon : eyeOffIcon}
                  alt="password off"
                />
              </button>
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
          </div>
          <div className="login__main-btnBox">
            <Button
              title="Zaloguj"
              addClasses={["login__main-btn", "primary-btn", "h4"]}
            />
            <UserLink
              content="Nie masz jeszcze konta? Zarejestruj się!"
              path="/register"
              addClasses={["login__main-link"]}
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
