import { signup } from "@/api/post";
import { mail, key, hide, view } from "@/assets/icon/icons";
import useInput from "@/hooks/useInput";
import { SignInContainer } from "@/style/loginpage/signin";
import { Input, Button } from "@/util";
import Icon from "@/util/icon";
import { useState, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [emailValue, emailOnChange] = useInput();
  const [passwordValue, passwordOnChange] = useInput();
  const [retryPasswordValue, retryOnChange] = useInput();
  const [onView, setOnview] = useState<boolean>();
  const [, setErrorMessage] = useState("");
  const navigate = useNavigate();
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

  const onSigninHandler = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      // if (!validateEmail(emailValue)) {
      //   setErrorMessage("이메일 형식아님");

      //   return alert("이메일 형식아님");
      // }
      // if (emailValue.trim() === "" || passwordValue.trim() === "") {
      //   return alert("빈칸을 채워주세요");
      // }
      if (passwordValue !== retryPasswordValue) {
        setErrorMessage("비밀번호가 같지않아요");
        console.log(passwordValue, "==?", retryPasswordValue);
        return alert("비밀번호가 같지않아요");
      }
      if (!validatePassword(passwordValue)) {
        setErrorMessage("특수문자 공백안되요");
        return alert("특수문자 공백안되요");
      }

      await signup({
        username: emailValue,
        password: passwordValue,
      })
        .then((res) => {
          console.log(res);
          alert("회원가입 완료");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert("회원가입에 실패했습니다 다시시도해주세요");
        })
        .finally();

      setErrorMessage("");

      // api 호출이요
    },
    [emailValue, passwordValue, retryPasswordValue]
  );

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
              InputSize="custom"
              icon={mail}
              id="email"
              color="custom"
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
              InputSize="custom"
              color="custom"
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
              color="custom"
              className="input"
              backgroundColor={"#1a292e"}
              icon={key}
              id="passwordretry"
              InputSize="custom"
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
