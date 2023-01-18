import React, { useState } from "react";
// import Header from "./components/Header/index";
// import Footer from "./components/Footer/index";
// import Profile from "./components/profile/index";
import Login from "./components/Login/index";
// import Newtab from "./components/Newtab/index";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <Profile />;
  //   }
  //   if (currentPage === "Login") {
  //     return <Login />;
  //   }
  //   if (currentPage === "Newtab") {
  //     return <Newtab />;
  //   }
  // };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      {/* <Header handlePageChange={handlePageChange} /> */}

      <Login />

      {/* {renderPage()} */}

      {/* <Footer /> */}
    </div>
  );
}
export default App;
