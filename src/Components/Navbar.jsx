import React from 'react'

const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <div className="nav-link" onClick={()=>setcategory("general")}>General</div>
          <div className="nav-link" onClick={()=>setcategory("technology")}>Technology</div>
          <div className="nav-link" onClick={()=>setcategory("business")}>Business</div>
          <div className="nav-link" onClick={()=>setcategory("health")}>Health</div>
          <div className="nav-link" onClick={()=>setcategory("sports")}>Sports</div>
          <div className="nav-link" onClick={()=>setcategory("entertainment")}>Entertainment</div>
          <div className="nav-link" onClick={()=>setcategory("science")}>Science</div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar