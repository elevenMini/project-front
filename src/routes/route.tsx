import { Register, Main, Detail, Setting, SignIn } from "@/page";
import { Routes, Route } from "react-router-dom";
import { LoginLayout, MainLayout } from "@/layout";
import NotAuthRoutes from "./authRoute";
import ProtectedRoutes from "./protectRoute";
import ErrorPage from "./404";
import { useAppSelector } from "@/hooks/useRedux";

const Nav = () => {
  const user = useAppSelector((state) => Boolean(state.user.token));
  return (
    <Routes>
      {/* NotAuth */}
      <Route element={<NotAuthRoutes user={user} />}>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route path={"/*"} element={<ErrorPage />} />

      {/* yesAuth */}
      <Route element={<ProtectedRoutes user={user} />}>
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
