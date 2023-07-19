import { Register, Main, Detail, Setting, SignIn, Gallery, Board, Upload } from "@/page";
import { Routes, Route } from "react-router-dom";
import { LoginLayout, MainLayout } from "@/layout";
import NotAuthRoutes from "./authRoute";
import ProtectedRoutes from "./protectRoute";
import ErrorPage from "./404";
import { useAppSelector } from "@/hooks/useRedux";
import BoardDetail from "@/page/boarddetail";

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
        <Route element={<MainLayout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Detail />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:boardId" element={<BoardDetail />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/gallery/upload" element={<Upload />} />
        </Route>
      </Route>

      {/* 404 handler */}
    </Routes>
  );
};

export default Nav;
