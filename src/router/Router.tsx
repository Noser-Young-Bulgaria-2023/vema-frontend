import { Route, Routes } from "react-router-dom";
import VendingPage from "../components/pages/VendingPage/VendingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<VendingPage />}></Route>
    </Routes>
  );
};

export default Router;
