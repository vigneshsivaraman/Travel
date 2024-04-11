import "./NavBar.css";
import { Component } from "react";
import { ManuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {clicked: false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">
          <i class="fa-solid fa-earth-americas"></i>Traveller
        </h1>
        <div className="manu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-close" : "fas fa-bars"}></i>
          
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {ManuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
