import React from "react";
import { withRouter } from "react-router-dom";
import List from "./Contraction";
import History from "./History";
import Post from "./Post";
import Write from "./WriteStatus";
import Infor from "./Information";
import { connect } from 'react-redux';
import Navbar from './CustomNavbar';
class Pictures extends React.Component {

  render() {
    const { users, posts, islogin, privateKey, publicKey } = this.props;
    if (users)
      return (
        <div>
          {this.props.islogin ?
            <div>
              {this.props.history.push('/login')}
            </div> : null
          }
          <Navbar/>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 offset-fixed f-left">
                <Infor account={users[publicKey]} />
              </div>
              <div class="col-lg-7 offset-lg-3">
                <div class="row">
                  <div class="col-lg-8">
                    <Write />
                    <Post />
                  </div>
                  <History />
                </div>
              </div>
              <List />
            </div>
          </div>
        </div>
      );
    return (<div><img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></img></div>);
  }
}

const mapStateToProps = (state) => ({
  privateKey: state.keyReducer.privateKey,
  publicKey: state.keyReducer.publicKey,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'logout' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Pictures));
