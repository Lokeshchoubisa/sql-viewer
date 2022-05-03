import React from 'react'

function Header(props) {
  const {setOpenTabs,openTabs, setActiveTab}=props;
  return (
      <div className="container-fluid">
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="/logo.svg" width="90" height="90" class="d-inline-block align-top" alt="" /> 
    </a>
    <form class="form-inline">
    <button onClick={(e)=>
    {
        e.preventDefault();
        let q=`query-${openTabs.length}`;
        setActiveTab(q);
        setOpenTabs([...openTabs,q]);
    }} class="btn btn-outline-success my-2 my-sm-0">Query +</button>
  </form>
</nav>
</div>
  )
}

export default Header