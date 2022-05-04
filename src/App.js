import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
const QueryArea = React.lazy(() => import("./components/QueryArea"));
const SideBar = React.lazy(() => import("./components/SideBar"));

function App() {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("home");


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} openTabs={openTabs} setOpenTabs={setOpenTabs} />
        </div>

        <div className="row">

          <div className="col-sm-12 col-md-3 col-lg-3">
            <Suspense fallback={<div>Loading...</div>}>
              <SideBar activeTab={activeTab} setActiveTab={setActiveTab} openTabs={openTabs} setOpenTabs={setOpenTabs} />
            </Suspense>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9">
            <Suspense fallback={<div>Loading...</div>}>
              <QueryArea activeTab={activeTab} setActiveTab={setActiveTab} openTabs={openTabs} setOpenTabs={setOpenTabs} />
            </Suspense>
          </div>
        </div>
       

      </div>
    </>
  );
}

export default App;
