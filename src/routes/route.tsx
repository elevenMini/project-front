import { Register, Main, Detail, Setting, SignIn } from "@/page";
import { Routes, Route } from "react-router-dom";
import { LoginLayout, MainLayout } from "@/layout";
import NotAuthRoutes from "./authRoute";
import ProtectedRoutes from "./protectRoute";
import ErrorPage from "./404";

const Nav = () => {
  return (
    <Routes>
      {/* NotAuth */}
      <Route element={<NotAuthRoutes user={false} />}>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route path={"/*"} element={<ErrorPage />} />

      {/* yesAuth */}
      <Route element={<ProtectedRoutes user={false} />}>
        <Route path="/main" element={<MainLayout />}>
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
