import React, { useEffect,useState ,useRef} from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import {GetData} from '../utils';

function Table(props) {
    const {tableName}=props;
    const [dataTable,setDataTable]=useState({});
    const [loading,setLoading]=useState(true);
    const message = useRef();
    
    function getDataTableColumn(header)
    {
        const columns=[];
        header.forEach(attr => {
            if(attr!=="picture" && attr!=="photo") { 
                columns.push({
                label:attr,
                field:attr,
                width:150
            })}
            
            
        });
        
        return columns
    }

    useEffect(()=>
    {
        
        GetData(tableName)
        .then(result=>
        {
            const dataTablecolumns= getDataTableColumn(result.header);  
            setLoading(false);
            let messageElem=message.current;
            messageElem.classList.add("alert-success");
            messageElem.getElementsByTagName("strong")[0].innerHTML="Success!"
            messageElem.getElementsByTagName("span")[0].innerHTML=`Data fetched successfully in ${result.time/1000}s`
            setDataTable({columns:dataTablecolumns,rows:result.rows});
        })
        .catch(error=>
        {
            let messageElem=message.current;
            messageElem.classList.add("alert-danger");
            messageElem.getElementsByTagName("strong")[0].innerHTML="Error!"
            messageElem.getElementsByTagName("span")[0].innerHTML=error
            setLoading(false);
        })
        
        

    },[tableName])

  return (
    <div>
        {loading ? <div class="align-center spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div> : null}


<div ref={message} class="alert alert-dismissible d-flex align-items-center fade show">
    <i class="bi-check-circle-fill"></i>
    <strong class="mx-2"></strong> <span></span>
</div>




        <MDBDataTableV5 hover entriesOptions={[15, 20, 25]} entries={8} pagesAmount={4} data={dataTable}  
searchTop
scrollX
searchBottom={false}       
/>

    </div>
  )
}

export default Table