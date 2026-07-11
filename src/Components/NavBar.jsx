import React from 'react'

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-success navbar-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Course App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Insert course</a>
        <a class="nav-link" href="/View">View Course</a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar