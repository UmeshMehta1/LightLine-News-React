import React from 'react'

function NavBar({setCategory, setSearchQuery,article}) {

  const handleSearch = (e) => {
    setSearchQuery(article.filter(f=>f.title.toLowerCase().includes(e.target.value)));
  };

  const handleSearchBtn=(e)=>{
    e.preventDefault();

  //  handleSearch();

  }
  return (

    <>
     
     <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LightLineNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active " aria-current="page">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("sports")}>Sport</a>
        </li>        
        
        <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("entertainment")}>Entertenment</a>
        </li>        
        
        <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("science")}>Science</a>
        </li>        
        
        <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("technology")}>Technology</a>
        </li>  
        
         <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("health")}>Health</a>
        </li>  
        
        <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("business")}>Business</a>
        </li>
        
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" onChange={handleSearch}  placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handleSearchBtn} type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
    
    </>
  )
}

export default NavBar