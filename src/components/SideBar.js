import React, { useCallback } from 'react'
import FILE_NAMES from '../data/fileNames'

function SideBar(props) {
    const { openTabs, setOpenTabs } = props;
    const tables = FILE_NAMES;

    // add tab to openTab list
    const memoizedAddToOpenTab=useCallback((tab)=>addToOpenTabs(tab),[]);

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
                    class="list-group-item list-group-item-action tableClass active"
                    id={`list-home-list`} data-toggle="list" href={`#list-home`} role="tab" aria-controls="home"
                >Home</a>
                <br></br>
                
                {/* open tables */}
                {openTabs.length > 0 ? <a
                    class="list-group-item list-group-item-action tableClass bg-success" >
                    Recent</a> : null}
                {openTabs.length > 0 && openTabs.map(tab => {
                    return <a
                        onClick={(e) => memoizedAddToOpenTab(tab)}
                        class="list-group-item list-group-item-action tableClass "
                        data-val={tab}
                        id={`list-${tab}-list`} data-toggle="list" href={`#list-${tab}`} role="tab" aria-controls="home"
                    >
                        {tab}</a>
                })}


                <br></br>

                {tables.length > 0 ? <a
                    class="list-group-item list-group-item-action tableClass bg-success" >
                    Tables</a> : null}
                {tables.map(tab => {
                    return <a
                        onClick={(e) => addToOpenTabs(tab)}
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