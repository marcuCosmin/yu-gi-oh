import { BrowserRouter, Routes, Route } from "react-router"

import { Home } from "./Home"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
