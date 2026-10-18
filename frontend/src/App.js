import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { I18nProvider } from "./context/I18nContext";
import { AuthProvider } from "./context/AuthContext";
import Analytics from "./components/Analytics";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <I18nProvider>
          <BrowserRouter>
            <Analytics />
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </BrowserRouter>
        </I18nProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;