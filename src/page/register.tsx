import { mail, key, hide, view } from "@/assets/icon/icons";
import useInput from "@/hooks/useInput";
import { SignInContainer } from "@/style/loginpage/signin";
import { Input, Button } from "@/util";
import Icon from "@/util/icon";
import { useState, FormEvent, useCallback } from "react";

const Register = () => {
  const [emailValue, emailOnChange] = useInput();
  const [passwordValue, passwordOnChange] = useInput();
  const [retryPasswordValue, retryOnChange] = useInput();
  const [onView, setOnview] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string) => {
    var re = /[\s\W]/;
    return !re.test(String(password));
  };
  const onViewHandler = () => {
    setOnview(!onView);
  };
  const onSigninHandler = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(emailValue)) {
      setErrorMessage("이메일 형식아님");

      return alert("이메일 형식아님");
    }
    if (passwordValue !== retryPasswordValue) {
      setErrorMessage("비밀번호가 같지않아요");
      return alert("비밀번호가 같지않아요");
    }
    if (!validatePassword(passwordValue)) {
      setErrorMessage("특수문자 공백안되요");
      return alert("특수문자 공백안되요");
    }

    alert(`    이메일 : ${emailValue}
      비밀번호 : ${passwordValue}
    `);

    setErrorMessage("");

    // api 호출이요
  }, []);

  const signContent = (
    <SignInContainer>
      <h2 className="signin-h2">회원가입</h2>
      <form onSubmit={onSigninHandler} className="signin-form" autoComplete="off">
        <div className="signin-email-container">
          <label htmlFor="email" className="signin-label">
            이메일 *
          </label>
          <div className="inputForm">
            <Icon src={mail} alt="asd" className={"icon-mail"} />
            <Input
              icon={mail}
              id="email"
              color="black"
              // type="email"
              onChange={emailOnChange}
              value={emailValue}
              placeholder={"아이디를 입력해주세요"}
            />
          </div>
        </div>
        <div className="signin-password-container">
          <label htmlFor="password" className="signin-label">
            비밀번호 *
          </label>
          <div className="inputForm">
            <Icon src={key} alt="asd" className={"icon-mail"} />
            <Input
              className="input"
              backgroundColor={"#1a292e"}
              icon={key}
              id="password"
              color="black"
              type={onView ? "text" : "password"}
              onChange={passwordOnChange}
              value={passwordValue}
              placeholder={"비밀번호를 입력해주세요"}
            />
            {passwordValue.length > 0 && (
              <>
                {onView ? (
                  <img className="icon-hide" src={hide} onClick={onViewHandler} />
                ) : (
                  <img className="icon-hide" src={view} onClick={onViewHandler} />
                )}
              </>
            )}
          </div>
        </div>
        <div className="signin-password-container">
          <label htmlFor="password" className="signin-label">
            비밀번호 재확인 *
          </label>
          <div className="inputForm">
            <Icon src={key} alt="asd" className={"icon-mail"} />
            <Input
              className="input"
              backgroundColor={"#1a292e"}
              icon={key}
              id="password"
              color="black"
              type={onView ? "text" : "password"}
              onChange={retryOnChange}
              value={retryPasswordValue}
              placeholder={"비밀번호를 다시한번 입력해주세요"}
            />
            {retryPasswordValue.length > 0 && (
              <>
                {onView ? (
                  <img className="icon-hide" src={hide} onClick={onViewHandler} />
                ) : (
                  <img className="icon-hide" src={view} onClick={onViewHandler} />
                )}
              </>
            )}
          </div>
        </div>
        <Button color="custom" size="custom" title={<>완료</>} type="submit" />
      </form>
    </SignInContainer>
  );

  return signContent;
};
export default Register;
