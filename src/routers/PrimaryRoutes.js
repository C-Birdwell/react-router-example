import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Logo } from "../components";
import { DashBoardScreen, OtherScreen } from "../screens";

export const PrimaryRoutes = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="/" index element={<DashBoardScreen />} />
        <Route path="/other" element={<OtherScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
