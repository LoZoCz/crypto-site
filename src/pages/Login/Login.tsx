import eyeOffIcon from "../../assets/images/icons/eye-off.svg";
import eyeOnIcon from "../../assets/images/icons/eye.svg";
import Button from "../../components/Button";
import { useState } from "react";
import UserLink from "../../components/UserLink";
import MainLayout from "../../layouts/MainLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../../components/Loader";

type LoginFieldsTypes = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFieldsTypes>();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit: SubmitHandler<LoginFieldsTypes> = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "Coś poszło nie tak" });
    }
  };

  return (
    <MainLayout>
      <main className="login__main">
        <form
          className="login__main-form glassyBg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="login__main-title h1">Witamy z powrotem!</h1>
          <div className="login__main-inpBox">
            <div className="login__main-mailWrapper">
              <div className="login__main-mailInpBox">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email-inp"
                  autoComplete="email"
                  className="login__main-textInp userInput"
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
            <div className="login__main-passWrapper">
              <div className="login__main-passInpBox">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Hasło"
                  id="passwd-inp"
                  className="login__main-textInp userInput"
                  {...register("password", {
                    required: "Hasło wymagane",
                    minLength: {
                      value: 8,
                      message: "Hasło musi mieć co najmniej 8 znaków",
                    },
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
          </div>
          <div className="login__main-btnBox">
            {errors.root && (
              <p className="login__main-formError">{errors.root.message}</p>
            )}
            <Button
              title={isSubmitting ? <Loader /> : "Zaloguj się"}
              type="submit"
              disabled={isSubmitting}
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
    </MainLayout>
  );
};

export default Login;

//TODO wykorzstaj zod razem z react form hook aby kod byl czytniejszy i lepszy
