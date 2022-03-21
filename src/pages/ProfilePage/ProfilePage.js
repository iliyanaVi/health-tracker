import { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/login-context";

import Button from "../../components/Button/Button";
import FormResetnewPassword from "../../components/Form/Form";
import Input from "../../components/Input/Input";

import useInput from "../../hooks/use-input";

import styles from "./ProfilePage.module.scss";
import Form from "../../components/Form/Form";
import FlashMessage from "../../components/FlashMessage/FlashMessage";

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const loginContext = useContext(LoginContext);

  const {
    value: newPassword,
    isValid: isNewPasswordValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordOnChange,
    valueBlurHandler: newPasswordOnBlur,
    reset: resetNewPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyALLEd9nGUS_V0G505Kz-mim8Z4k69wY5A",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: loginContext.token,
          password: newPassword,
          returnSecureToken: false,
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
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section>
      {
        <FlashMessage
          show={showSuccess}
          message="Password successfully changed"
          type="success"
        />
      }
      <FormResetnewPassword
        onSubmit={submitHandler}
        className={`m-5 d-flex flex-column justify-content-between`}
      >
        <div className="mt-5">
          <Input
            miLength="7"
            type="password"
            id="newPassword"
            label="New Password"
            onChange={newPasswordOnChange}
            onBlur={newPasswordOnBlur}
            value={newPassword || ""}
          />
        </div>
        <Button className="mb-5" text="Change Password" />
      </FormResetnewPassword>
    </section>
  );
}
export default ProfilePage;
