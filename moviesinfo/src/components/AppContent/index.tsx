import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

import "./styles.scss";

const AppContent = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main>Main</main>
      <Footer />
    </div>
  );
};

export default AppContent;
