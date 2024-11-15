import { Route, Routes } from "react-router";
import { MainPage, SOP } from "../pages";
export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/SOP" element={<SOP />} />
    </Routes>
  );
};
