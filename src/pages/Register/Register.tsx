import eyeOffIcon from "../../assets/images/icons/eye-off.svg";
import eyeOnIcon from "../../assets/images/icons/eye.svg";
import Button from "../../components/Button";
import { useState } from "react";
import UserLink from "../../components/UserLink";
import MainLayout from "../../layouts/MainLayout";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repPasswordVisible, setRepPasswordVisible] = useState(false);

  const handeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("rejestracja");
  };

  return (
    <MainLayout>
      <main className="register__main">
        <form
          className="register__main-form glassyBg"
          onSubmit={(e) => handeSubmit(e)}
        >
          <h1 className="register__main-title h1">Utwórz swoje konto</h1>
          <div className="register__main-inpBox">
            <div className="register__main-loginInpBox">
              <input
                className="register__main-textInp userInput"
                type="text"
                placeholder="Login"
                name="login"
                id="login-inp"
              />
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="register__main-loginInpBox">
              <input
                className="register__main-textInp userInput"
                type="email"
                placeholder="E-mail"
                name="mail"
                id="mail-inp"
              />
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="register__main-passInpBox">
              <input
                className="register__main-textInp userInput"
                type={passwordVisible ? "text" : "password"}
                placeholder="Hasło"
                name="password"
                id="passwd-inp"
              />
              <button
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="passInp__btn"
                type="button"
              >
                <img
                  src={passwordVisible ? eyeOnIcon : eyeOffIcon}
                  alt="password off"
                />
              </button>
              {/* <p className="login__main-inpError">Error</p> */}
            </div>
            <div className="register__main-passInpBox">
              <input
                className="register__main-textInp userInput"
                type={repPasswordVisible ? "text" : "password"}
                placeholder="Powtórz hasło"
                name="repPassword"
                id="repPasswd-inp"
              />
              <button
                onClick={() => setRepPasswordVisible(!repPasswordVisible)}
                className="passInp__btn"
                type="button"
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
              type="submit"
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
    </MainLayout>
  );
};

export default Register;
