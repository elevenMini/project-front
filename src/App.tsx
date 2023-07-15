import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import Layout from "./layout/layout";
import { Main, Login, Register, Detail, Setting } from "./page";
import SignIn from "./components/signin";

function Nav() {
  return (
    <Routes>
      {/* auth */}

      <Route element={<Login />}>
        <Route index element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* yesAuth */}
      <Route element={<></>}>
        <Route path="/main" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/main/:id" element={<Detail />} />
          <Route path="/main/setting" element={<Setting />} />
        </Route>
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
}

export default App;
