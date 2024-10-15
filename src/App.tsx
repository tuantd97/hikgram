import { Routes, Route } from "react-router-dom";

import "./globals.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <main className="flex h-screen">
      {t("content")}
      <Routes>
        {/* Public routes */}
        <Route path="/sign-in" element={<></>} />

        {/* Private routes */}
        <Route index element={<></>} />
      </Routes>
    </main>
  );
}

export default App;
