import { LoginPage } from "@/pages/login/page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
