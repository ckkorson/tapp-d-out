import React, { useState } from "react";
import Header from "./components/Header/index";
// import Footer from "./components/Footer/index";
import Profile from "./components/Profile/index";
import Login from "./components/Login/index";
import Createacct from "./components/Createacct/index";
import Landing from "./components/Landing/index";
import Newtab from "./components/Newtab/index";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Landing");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Landing") {
      return <Landing />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Createacct") {
      return <Createacct />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Newtab") {
      return <Newtab />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header handlePageChange={handlePageChange} />

      {renderPage()}

      {/* <Footer /> */}
    </div>
  );
}
export default App;
