import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="navbar container">
        <nav>
          <NavLink to="/" exact className="nav-link cursive">
            Mahabubur
          </NavLink>
          <NavLink to="/post" className="nav-link">
            Blog Posts
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
