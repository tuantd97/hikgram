import { Routes, Route } from "react-router-dom";

import "./globals.css";

function App() {
  return (
    <main className="flex h-screen">
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
