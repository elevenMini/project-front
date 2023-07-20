# 11조 프로젝트

- [11조 프로젝트](#11조-프로젝트)
  - [Frontend 이슈](#frontend-이슈)
    - [JWT (JSON Web Tokens) 토큰 처리 문제](#jwt-json-web-tokens-토큰-처리-문제)
    - [트러블 슈팅 - 해결방안](#트러블-슈팅---해결방안)
  - [아쉬운점 \& 개선점](#아쉬운점--개선점)
  - [만약 되돌아간다면](#만약-되돌아간다면)
    - [Notion link](#notion-link)
    - [Member links](#member-links)
    - [Front](#front)
    - [Back](#back)

## Frontend 이슈

### JWT (JSON Web Tokens) 토큰 처리 문제

JWT는 사용자 인증을 위해 사용하는 토큰입니다. 사용자가 로그인을 하면, 이 JWT 토큰은 네트워크 탭의 set-cookie에 나타납니다.
![네트워크탭](https://user-images.githubusercontent.com/85878391/254797800-e87c1d2e-ae81-402d-9234-c3794ef94780.png)
로그인 이후 서버로부터 토큰을 정상적으로 받아오는 것까지 확인했지만, 이 토큰을 프론트에서 가져와서 HTTP 헤더에 붙여넣는 것에 어려움이 있었습니다.

- 문제의 원인은 브라우저의 보안 업데이트로 인한 쿠키의 `SameSite` 속성의 변경 때문이었습니다. 이 때문에 저희 팀은 각자 조사한 결과 다음의 방법들을 고려하게 되었습니다

  - **방안 1.** `SameSite` 속성을 `None`으로 설정하고, `Secure` 속성을 `true`로 설정하기 (HTTPS 필요)
  - **방안 2.** 모든 요청을 GET 요청으로 변경하기 (`Lax` 속성)
  - **방안 3.** 동일한 도메인에서 배포하기 (route53)
  - **방안 4.** 응답 바디에 토큰을 넣어 프론트에서 직접 토큰을 핸들링하기
  - **방안 5.** nginx를 이용하여 리버스 프록시 설정하기
  - **방안 6.** Docker 활용하기

### 트러블 슈팅 - 해결방안

토큰 문제를 해결하기 위해 CORS (Cross-Origin Resource Sharing) 설정과 `SameSite` 속성을 조정하였습니다.

1. **CORS 설정**

   서버에서는 허용되는 출처를 명시적으로 설정하고, 쿠키를 포함한 요청을 허용하기 위해 `allowCredentials`를 `true`로 설정하였습니다.

   ```tsx
   export const server: AxiosInstance = axios.create({
     baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
     withCredentials: true, // 요청에 쿠키담기
   });
   ```

   - 스프링부트에서 CORS 설정
   - 백엔드에서는 CORS 설정을 변경하여 프론트엔드에서 보낸 쿠키를 수락할 수 있게 해야 함

   ```java
   @Override
   public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/api/**")
              .allowedOrigins(ALLOWED_ORIGINS.toArray(new String[0]))
              // 프론트도메인 // * 는 브라우저에서 위험으로 판단하여 다막아버림
              .allowedMethods("*")
              .allowCredentials(true)
              .maxAge(3000);
   }
   ```

2. **`SameSite` 속성 조정**
   ![네트워크탭2](https://user-images.githubusercontent.com/85878391/254797810-58b73b91-fa49-482d-a81b-8b2e60510730.png)
   크롬 버전 80 이후로 쿠키의 `SameSite` 속성은 기본적으로 `Lax`로 설정되어 있어, 이를 `None`으로 설정하였습니다. `None` 설정을 위해서는 `Secure` 속성이 `true`로 설정되어야 하며, HTTPS을 적용해야했습니다.

   ```jsx
   import javax.servlet.http.Cookie;
   import javax.servlet.http.HttpServletResponse;

   public void createCookie(HttpServletResponse response) {
       Cookie cookie = new Cookie("cookieName", "cookieValue");
       cookie.setPath("/");
       cookie.setHttpOnly(true); // 프론트에서 확인 불가. XSS 공격에 방어력 +1
       cookie.setSecure(true);  // SameSite=None 설정을 사용하려면 Secure도 true로 설정해야 함.
       cookie.setAttribute("SameSite", "None");

   		res.addCookie(cookie); // SameSite=None 추가
   }
   ```

   이처럼 브라우저에서 나는 에러들도 백엔드분들과 협력하여 더욱 다양한 시선에서 바라볼수 있어 좋았고, 해결역시 빠르게 해결되어 잘 마무리되었습니다.

## 아쉬운점 & 개선점

1. 이미지를많이 업로드하는만큼 이미지의 크기를 줄이고 업로드를 하는 로직을 추가 **서버 부담 감소 및 브라우저 로딩감소**
2. 이미지를 많이 불러오는 만큼 이미지가 각각 로드되는 속도 역시 데이터가 많아질수록 느려짐, `lazyloading`이나 `prefetch`를 통한 이미지 최적화 로직 등 추가하여 **사용자 경험 상승**
3. 백엔드 서버는 S3와 EC2로 배포되는반면 프론트는 vercel로 배포함 , 나중에 route53을 통한 동일한 도메인으로 배포를 하여 위 트러블을 피해보자
4. 여러 list들이 많은만큼 페이지네이션이나 인피니티스크롤의 사용이 필수가 됨

## 만약 되돌아간다면

- 회의를 더욱 자주할것 -> 주기 적인 회의를 통해 서로의 진행상황과 목표치를 생각할 수 있음

**이상입니다 감사합니다**

### Notion link

https://nervous-nemophila-a41.notion.site/83aec441bb1140ddbe6825d032def902?pvs=4
<br>

### Member links

### Front

**최은석**

- **[git 주소](https://github.com/nonjk2)** <br>
- **[blog](https://deveundol.com/)**

### Back

**홍승현**

- **[git 주소](https://github.com/hongsh429)** <br>
- **[blog](https://hongs429-blog.tistory.com/)**

**최순**

- **[git 주소](https://github.com/soon91)** <br>
- **[blog](https://soony91.tistory.com)**
