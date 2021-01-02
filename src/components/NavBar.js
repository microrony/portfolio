import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="navbar container">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="nav-link cursive"
          >
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

        <div className="social-icons">
          <SocialIcon
            className="social-icon"
            url="https://twitter.com/microrony"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            className="social-icon"
            url="https://github.com/microrony"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            className="social-icon"
            url="https://www.linkedin.com/in/microrony/"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar
