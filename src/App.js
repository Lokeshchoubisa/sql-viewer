import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import QueryArea from "./components/QueryArea";
import SideBar from "./components/SideBar";



function App() {

  const [openTabs,setOpenTabs]=useState([]);
  const [activeTab,setActiveTab]=useState(null);
  return (
    <>
      <div className="container-fluid">
      <div className="row"> 
        <Header activeTab={activeTab} setActiveTab={setActiveTab} openTabs={openTabs} setOpenTabs={setOpenTabs}/>
      </div>
        
        <div className="row">
          
          <div className="col-3">
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab}  openTabs={openTabs} setOpenTabs={setOpenTabs}/>
          </div>
          <div className="col-9">
            <QueryArea activeTab={activeTab} setActiveTab={setActiveTab}  openTabs={openTabs} setOpenTabs={setOpenTabs} />
          </div>
        </div>
      
      </div>
    </>
  );
}

export default App;
