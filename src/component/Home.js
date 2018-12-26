import React from "react";
import { withRouter } from "react-router-dom";
import List from "./Contraction";
import History from "./History";
import Post from "./Post";
import Write from "./WriteStatus";
import Infor from "./Information";
import { connect } from 'react-redux'
class Pictures extends React.Component {

  render() {
    const { users, posts, islogin, privateKey, publicKey } = this.props;
    const key = publicKey;
    if (users) {
      console.log(users[key].posts); //Trả về  mảng key
      if (users[key].posts) {
        const postHash = users[key].posts[0]; //Lấy key thứ 1
        if (posts)
          console.log(posts[postHash].content); //Lấy ra nội dung, hoặc lấy comment, của 1 post trong danh sách trên.
      }
    }
    return (
      <div>
        {this.props.islogin ?
          <div>
            {this.props.history.push('/login')}
          </div> : null
        }
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 offset-fixed f-left">
              <Infor />
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
