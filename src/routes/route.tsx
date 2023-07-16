import SignIn from "@/components/signin";
import Layout from "@/layout/layout";
import { Login, Register, Main, Detail, Setting } from "@/page";
import { Routes, Route } from "react-router-dom";
import NotAuthRoutes from "./authRoute";
import ProtectedRoutes from "./protectRoute";
import ErrorPage from "./404";

const Nav = () => {
  return (
    <Routes>
      {/* auth */}
      <Route element={<NotAuthRoutes user={false} />}>
        <Route path="/" element={<Login />}>
          <Route index element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route path={"/*"} element={<ErrorPage />} />

      {/* yesAuth */}
      <Route element={<ProtectedRoutes user={false} />}>
        <Route path="/main" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/main/:id" element={<Detail />} />
          <Route path="/main/setting" element={<Setting />} />
        </Route>
      </Route>

      {/* 404 handler */}
    </Routes>
  );
};

export default Nav;
