import { hide, key, mail, view } from "@/assets/icon/icons";
import useInput from "@/hooks/useInput";
import { SignInContainer } from "@/style/loginpage/signin";
import { Button, Input } from "@/util";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [emailValue, emailOnChange] = useInput();
  const [passwordValue, passwordOnChange] = useInput();
  const [onView, setOnview] = useState<boolean>();
  const onViewHandler = () => {
    setOnview(!onView);
  };
  const onSigninHandler = (e: FormEvent) => {
    e.preventDefault();
    alert("확인");

    // signin handeler api
  };

  const signContent = (
    <SignInContainer>
      <h2 className="signin-h2">로그인</h2>
      <form onSubmit={onSigninHandler} className="signin-form" autoComplete="off">
        <div className="signin-email-container">
          <label htmlFor="email" className="signin-label">
            이메일 *
          </label>
          <div className="inputForm">
            <img className="icon-mail" src={mail} />
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
            <img className="icon-mail" src={key} />
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
        <Button color="custom" size="custom" title={<>로그인</>} type="submit" onClick={() => {}} />
      </form>
      <div className="sign-up-btn">
        <Link to={"/register"}>회원가입{">"}</Link>
      </div>
    </SignInContainer>
  );

  return signContent;
};
export default SignIn;
