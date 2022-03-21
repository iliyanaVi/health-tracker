import styles from "./SignUpPage.module.scss";

import { useState } from "react";

import SignUpForm from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InputWrapper from "../../components/InputWrapper/InputWrapper";

import useInput from "../../hooks/use-input";

function SignUpPage() {
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
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALLEd9nGUS_V0G505Kz-mim8Z4k69wY5A",
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
    ).then((res) => {
      setIsLoading(false);

      if (res.ok) {
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
  };

  return (
    <section className="vh-100 d-flex justify-content-center">
      <SignUpForm
        onSubmit={submitHandler}
        className={`m-5 g-3 d-flex flex-column justify-content-between`}
      >
        <div className={`py-5`}>
          <InputWrapper>
            <Input
              type="email"
              id="email"
              label="Email"
              onChange={emailOnChange}
              onBlur={emailOnBlur}
              value={email || ""}
            />
          </InputWrapper>
          <div className="position-relative">
            <InputWrapper>
              <Input
                type="password"
                id="password"
                label="Password"
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
        {!isLoading && (
          <div>
            <Button className="mb-5" text="Sign up" />
          </div>
        )}

        {/* to be added a spinner */}
        {isLoading && <p>Loading...</p>}
      </SignUpForm>
    </section>
  );
}
export default SignUpPage;
