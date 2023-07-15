import { mail, key, hide, view } from "@/assets/icon/icons";
import useInput from "@/hooks/useInput";
import { SignInContainer } from "@/style/loginpage/signin";
import Button from "@/util/button";
import Input from "@/util/input";
import { useState, FormEvent } from "react";

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
  //   ^ : 문자열의 시작을 나타냅니다.
  // (([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")) : 이메일 주소의 로컬 부분을 확인합니다. 이는 <, >, [, ], \, ., ;, :, @ 와 같은 문자를 포함하지 않는 하나 이상의 문자([^<>()[\]\\.,;:\s@"]+)와 그 뒤에 점('.')과 그것에 이어지는 비슷한 문자들((\.[^<>()[\]\\.,;:\s@"]+)*)을 의미하거나, 또는 쌍따옴표 안에 있는 어떠한 문자열(".+")을 의미합니다.
  // @ : 이메일 주소에서 @ 기호를 나타냅니다.
  // ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) : 도메인 부분을 확인합니다. 이는 IP 형태의 도메인을 체크하는 부분(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]\) 또는 일반적인 도메인 형태를 체크하는 부분(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}) 두 가지로 나뉩니다. 일반적인 도메인 형태에서는 도메인이 대소문자 알파벳, 숫자, 하이픈으로 시작하고, 그 뒤에 점('.')과 그것에 이어지는 비슷한 문자열이 하나 이상 나온 뒤에 마지막에 두 글자 이상의 알파벳으로 끝나야 합니다.
  // $ : 문자열의 끝을 나타냅니다.

  const validatePassword = (password: string) => {
    var re = /[\s\W]/;
    return !re.test(String(password));
  };
  const onViewHandler = () => {
    setOnview(!onView);
  };
  const onSigninHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(emailValue)) {
      setErrorMessage("이메일 형식아님");
      return alert(errorMessage);
    }
    if (passwordValue !== retryPasswordValue) {
      setErrorMessage("비밀번호가 같지않아요");
      return alert(errorMessage);
    }
    if (!validatePassword(passwordValue)) {
      setErrorMessage("특수문자 공백안되요");
      return alert(errorMessage);
    }

    alert(`    이메일 : ${emailValue}
      비밀번호 : ${passwordValue}
    `);
    setErrorMessage("");

    // api 호출이요
  };

  const signContent = (
    <SignInContainer>
      <h2 className="signin-h2">회원가입</h2>
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
        <div className="signin-password-container">
          <label htmlFor="password" className="signin-label">
            비밀번호 재확인 *
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
