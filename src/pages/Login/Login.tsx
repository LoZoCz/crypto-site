import Header from "../../components/header/Header";
import eyeOffIcon from "../../assets/images/icons/eye-off.svg";
import eyeOnIcon from "../../assets/images/icons/eye.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

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
              <input
                className="login__main-textInp"
                type="text"
                placeholder="Login"
              />
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="login__main-passInpBox">
              <input
                className="login__main-textInp"
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
            <Link to="/register" className="login__main-link">
              Nie masz jeszcze konta? Zarejestruj się!
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
