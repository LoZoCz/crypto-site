import eyeOffIcon from "../../assets/images/icons/eye-off.svg";
import eyeOnIcon from "../../assets/images/icons/eye.svg";
import Button from "../../components/Button";
import { useState } from "react";
import UserLink from "../../components/UserLink";
import MainLayout from "../../layouts/MainLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../../components/Loader";

type RegisterFieldsTypes = {
  login: string;
  email: string;
  password: string;
  repPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFieldsTypes>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repPasswordVisible, setRepPasswordVisible] = useState(false);

  const watchPassword = watch("password", "");
  const watchRepPassword = watch("repPassword", "");

  const onSubmit: SubmitHandler<RegisterFieldsTypes> = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "Coś poszło nie tak" });
    }
  };

  return (
    <MainLayout>
      <main className="register__main">
        <form
          className="register__main-form glassyBg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="register__main-title h1">Utwórz swoje konto</h1>
          <div className="register__main-inpBox">
            <div className="register__main-loginWrapper">
              <div className="register__main-loginInpBox">
                <input
                  className="register__main-textInp userInput"
                  type="text"
                  placeholder="Login"
                  id="login-inp"
                  {...register("login", {
                    required: "Login jest wymagany",
                    minLength: {
                      value: 3,
                      message: "Login musi mieć co najmniej 3 znaki",
                    },
                  })}
                />
              </div>
              {errors.login && (
                <p className="login__main-inpError">{errors.login.message}</p>
              )}
            </div>
            <div className="register__main-mailWrapper">
              <div className="register__main-mailInpBox">
                <input
                  className="register__main-textInp userInput"
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  id="mail-inp"
                  {...register("email", {
                    required: "E-mail wymagane",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Podany e-mail jest nieprawidłowy",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="login__main-inpError">{errors.email.message}</p>
              )}
            </div>
            <div className="register__main-passWrapper">
              <div className="register__main-passInpBox">
                <input
                  className="register__main-textInp userInput"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Hasło"
                  id="passwd-inp"
                  {...register("password", {
                    required: "Hasło wymagane",
                    minLength: {
                      value: 8,
                      message: "Hasło musi mieć co najmniej 8 znaków",
                    },
                    validate: (value) =>
                      value === watchRepPassword || "Hasła nie pasują",
                  })}
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
              </div>
              {errors.password && (
                <p className="login__main-inpError">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="register__main-repPassWrapper">
              <div className="register__main-passInpBox">
                <input
                  className="register__main-textInp userInput"
                  type={repPasswordVisible ? "text" : "password"}
                  placeholder="Powtórz hasło"
                  id="repPasswd-inp"
                  {...register("repPassword", {
                    required: "Powtórzone hasło wymagane",
                    minLength: {
                      value: 8,
                      message: "Hasło musi mieć co najmniej 8 znaków",
                    },
                    validate: (value) =>
                      value === watchPassword || "Hasła nie pasują",
                  })}
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
              </div>
              {errors.repPassword && (
                <p className="login__main-inpError">
                  {errors.repPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="register__main-btnBox">
            {errors.root && (
              <p className="login__main-formError">{errors.root.message}</p>
            )}
            <Button
              title={isSubmitting ? <Loader /> : "Zarejestruj"}
              type="submit"
              disabled={isSubmitting}
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
