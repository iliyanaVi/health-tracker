import { useContext, useState } from "react";
import LoginContext from "../../context/login-context";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Form from "./../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InputWrapper from "../../components/InputWrapper/InputWrapper";

import useInput from "../../hooks/use-input";

import styles from "./LoginPage.module.scss";

function LoginPage() {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const loginContext = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(false);
  const [inputType, setInputType] = useState("password");

  const showPassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  const {
    value: email,
    isValid: isEmailValid,
    hasError: emailError,
    valueChangeHandler: emailOnChange,
    valueBlurHandler: emailOnBlur,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: password,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordOnChange,
    valueBlurHandler: passwordOnBlur,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALLEd9nGUS_V0G505Kz-mim8Z4k69wY5A",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            // alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        loginContext.login(data.idToken, expirationTime.toString());
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section className={`vh-100 d-flex justify-content-center`}>
      <Form
        onSubmit={submitHandler}
        className={`m-5 d-flex flex-column justify-content-between`}
      >
        <div className="pt-5">
          <InputWrapper>
            <Input
              type="email"
              id="email"
              label={t("common.email")}
              onChange={emailOnChange}
              onBlur={emailOnBlur}
              value={email || ""}
            />
          </InputWrapper>
          <div className="position-relative">
            <InputWrapper>
              <Input
                type={inputType}
                id="password"
                label={t("common.password")}
                onChange={passwordOnChange}
                onBlur={passwordOnBlur}
                value={password || ""}
              />
            </InputWrapper>
            <span className={`${styles.showSpan}`} onClick={showPassword}>
              show
            </span>
          </div>
        </div>
        <Button className="mb-5" text="Log in" />
      </Form>
    </section>
  );
}
export default LoginPage;
