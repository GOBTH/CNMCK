import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './CustomNavbar.css';
import { connect } from 'react-redux';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
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
  onSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  }
  render() {
    return (
      <form class="topnav" onSubmit={this.onSubmit} >
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
        <button style={{float: 'right'}} type='submit' componentClass={Link} >
          LOG OUT
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  privateKey: state.keyReducer.privateKey,
  publicKey: state.keyReducer.publicKey,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'logout' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomNavbar));