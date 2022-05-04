import React, { useCallback } from 'react'
import FILE_NAMES from '../data/fileNames'

function SideBar(props) {
    const { openTabs, setOpenTabs ,activeTab,setActiveTab} = props;
    const tables = FILE_NAMES;

    // add tab to openTab list
    

    function addToOpenTabs(tab) {
        let index = openTabs.indexOf(tab);
        if (index !== -1) {
            return;
        }
        else {
            setOpenTabs([...openTabs, tab]);
        }
    }


    

    return (
        <div className='sticky-top'>

            <div class="list-group" id="list-tab" role="tablist">
                <a
                    onClick={(e) => {
                        setActiveTab("home");
                    }}
                    className={activeTab==="home" ? "list-group-item list-group-item-action tableClass active" : "list-group-item list-group-item-action tableClass"}
                    key={`list-home-list`} 
                    id={`list-home-list`} data-toggle="list" href={`#list-home`} role="tab" aria-controls="home"
                >Home</a>
                <br></br>
             
                {/* open tables */}
                {openTabs.length > 0 ? <a
                    class="list-group-item list-group-item-action tableClass bg-success" >
                    Recent</a> : null}
                {openTabs.length > 0 && openTabs.map((tab,index) => {
                    return <a
                        key={`opentable-${tab}`}
                        onClick={(e) => {
                        setActiveTab(tab);
                        }}
                        class={activeTab===tab ? "list-group-item list-group-item-action tableClass active" : "list-group-item list-group-item-action tableClass"}
                        data-val={tab}
                        id={`list-${tab}-list`} data-toggle="list" href={`#list-${tab}`} role="tab" aria-controls="home"
                    >
                        {tab}
                         
                        </a>
                })}


                <br></br>

                {tables.length > 0 ? <a
                     
                    class="list-group-item list-group-item-action tableClass bg-success" >
                    Tables</a> : null}
                {tables.map((tab,index) => {
                    return <a
                        key={`table-${index}`}
                        onClick={(e) => {
                        setActiveTab(tab);
                        addToOpenTabs(tab);
                        }}
                        class={activeTab===tab ? "list-group-item list-group-item-action tableClass active" : "list-group-item list-group-item-action tableClass"}
                        data-val={tab}
                        id={`list-${tab}-list`} data-toggle="list" href={`#list-${tab}`} role="tab" aria-controls="home"
                    >
                        {tab}</a>
                })}

            </div>

        </div>
    )
}

export default SideBar