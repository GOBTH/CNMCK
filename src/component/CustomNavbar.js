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
        <a eventKey={1} componentClass={Link} href="/" to="/">
          HOME    
        </a>
        <a eventKey={2} componentClass={Link} href="/infor" to="/infor">
          INFO
        </a>
        <input
          id="search"
          className="input"
          type="text"
          placeholder="Search"
          onKeyPress={this.search}
        />
      </div>
    );
  }
}
export default withRouter(CustomNavbar);
