import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return <>
  <BrowserRouter>
  <Routes>
    {/* index = this route matches the default path of its parent. */}
    <Route index element={<Home />} />
    {/* path="*" = a catch-all route. */}
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
