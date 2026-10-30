import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppProvider from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import BonusAds from "./pages/BonusAds";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/watchAd-bonus" element={<BonusAds />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
