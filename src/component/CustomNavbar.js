import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './CustomNavbar.css';

class CustomNavbar extends Component {
  search = id => {
    if (id.key === "Enter") {
      const key = id.target.value
        .split(" ")
        .join("")
        .toLowerCase();
      this.props.history.push("/tag/" + key);
      window.location.reload();
    }
  };
  render() {
    return (
      <div class="topnav">
        <a eventKey={1} componentClass={Link} href="/home" to="/home">
          HOME    
        </a>
        <a eventKey={2} componentClass={Link} href="/infor" to="/infor">
          INFO
        </a>
        <a eventKey={3} componentClass={Link} href="/invite" to="/invite">
          INVITE
        </a>
        <input
          id="search"
          className="input"
          type="text"
          placeholder="Search"
          onKeyPress={this.search}
        />
        <a style={{float: 'right'}} eventKey={4} componentClass={Link} href="/login" to="/login">
          LOG OUT
        </a>
        {/* <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li style={{float: 'right'}}><a href="#about">About</a></li>
        </ul> */}
      </div>
    );
  }
}
export default withRouter(CustomNavbar);
