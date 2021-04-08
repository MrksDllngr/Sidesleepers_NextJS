import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { MainWrapper, Container } from "./LayoutComponents";
import Alert from "./Alert";

const Layout = ({ children, preview }) => {
  return (
    <MainWrapper>
      {preview ? <Alert /> : null}
      <Header />
      
        <main>{children}</main>

      <Footer />
    </MainWrapper>
  );
};

export default Layout;
