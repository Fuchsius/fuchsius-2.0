import { Route, Routes } from "react-router-dom"; // Correct imports

import HomePage from "@/pages/home/home-page";
import ServicePage from "./pages/service/service-page";

const App = () => {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="services/:servicename" element={<ServicePage />} />
    </Routes>
  );
};

export default App;
