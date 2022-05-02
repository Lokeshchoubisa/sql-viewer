import React, { useEffect, useMemo } from 'react'
import FILE_NAMES from '../data/fileNames'

function SideBar(props) {
    const {openTabs,setOpenTabs,setActiveTab,activeTab}=props;
    const tables=FILE_NAMES;

    useEffect(()=>
    {
        if(activeTab)
        {
            let elems=document.getElementsByClassName("tableClass");
            for(let i=0;i<elems.length;i++)
            {
              elems[i].classList.remove("active");
            }
            elems=document.getElementsByClassName("tabContent");
            for(let i=0;i<elems.length;i++)
            {
              elems[i].classList.remove("active");
            }
            document.getElementById(`list-${activeTab}-list`).classList.add("active");
            document.getElementById(`list-${activeTab}`).classList.add("active");
            
        }
    },[activeTab])


    function addToOpenTabs(tab)
    {
        let index = openTabs.indexOf(tab);
        if(index!==-1)
        {
            return ;
        }
        else
        {
            setOpenTabs([...openTabs,tab]);
        }
    }

    return (
    <div className='sticky-top'>
       
        <div class="list-group" id="list-tab" role="tablist">
        <a 
            class="list-group-item list-group-item-action tableClass active" 
            id={`list-home-list`} data-toggle="list" href={`#list-home`} role="tab" aria-controls="home"
            >Home</a>
            <br></br>
        {openTabs.length>0 ? <a 
            class="list-group-item list-group-item-action tableClass bg-success" >
            Recent</a> : null }
        {openTabs.length>0 && openTabs.map(tab=>
        {    
            return <a 
            onClick={(e)=>addToOpenTabs(tab)}
            class="list-group-item list-group-item-action tableClass " 
            data-val={tab} 
            id={`list-${tab}-list`} data-toggle="list" href={`#list-${tab}`} role="tab" aria-controls="home"
            >
            {tab}</a>
        })}


            <br></br>

          
        {tables.map(tab=>
        {
            return <a 
            onClick={(e)=>addToOpenTabs(tab)}
            class="list-group-item list-group-item-action tableClass"
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