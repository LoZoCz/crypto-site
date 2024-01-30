import Header from "../../components/header/Header";
import eyeOffIcon from "../../assets/images/icons/eye-off.svg";
import eyeOnIcon from "../../assets/images/icons/eye.svg";
import Button from "../../components/Button";
import UserInput from "../../components/UserInput";
import { useState } from "react";
import UserLink from "../../components/UserLink";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repPasswordVisible, setRepPasswordVisible] = useState(false);

  const handeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("rejestracja");
  };

  return (
    <>
      <Header />
      <main className="register__main">
        <form
          className="register__main-form glassyBg"
          onSubmit={(e) => handeSubmit(e)}
        >
          <h1 className="register__main-title h1">Utwórz swoje konto</h1>
          <div className="register__main-inpBox">
            <div className="register__main-loginInpBox">
              <UserInput
                type="text"
                placeholder="Login"
                name="login"
                addClasses={["register__main-textInp"]}
              />
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="register__main-loginInpBox">
              <UserInput
                type="email"
                placeholder="E-mail"
                name="mail"
                addClasses={["register__main-textInp"]}
              />
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="register__main-passInpBox">
              <UserInput
                addClasses={["register__main-textInp"]}
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
            <div className="register__main-passInpBox">
              <UserInput
                addClasses={["register__main-textInp"]}
                type={repPasswordVisible ? "text" : "password"}
                placeholder="Powtórz hasło"
              />
              <button
                onClick={() => setRepPasswordVisible(!repPasswordVisible)}
                className="passInp__btn"
              >
                <img
                  src={repPasswordVisible ? eyeOnIcon : eyeOffIcon}
                  alt="password off"
                />
              </button>
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
          </div>
          <div className="register__main-btnBox">
            <Button
              title="Zarejestruj"
              addClasses={["register__main-btn", "primary-btn", "h4"]}
            />
            <UserLink
              content="Masz już konto? Zaloguj się!"
              path="/login"
              addClasses={["register__main-link"]}
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
