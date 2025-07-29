import { LoginPage } from "@/pages/login/page";
import { RegisterPage } from "@/pages/register/page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
