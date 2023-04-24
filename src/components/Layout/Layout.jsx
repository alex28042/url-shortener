import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
