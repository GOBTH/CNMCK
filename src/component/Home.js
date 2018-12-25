import React from "react";
import { withRouter } from "react-router-dom";
import List from "./Contraction";
import History from "./History";
import Post from "./Post";
import Write from "./WriteStatus";
import Infor from "./Information";
class Pictures extends React.Component {

  render() {
    const { users, posts } = this.props;
    const key = 'GAKXVIL35CL7QRBFIAXCYMOAV4JKD3QDWGRYJRMSWNRJWX7RL726IAOF';
    if (users) {
      console.log(users[key].posts); //Trả về  mảng key
      const postHash = users[key].posts[4]; //Lấy key thứ 4
      if (posts)
        console.log(posts[postHash].content); //Lấy ra nội dung, hoặc lấy comment, của 1 post trong danh sách trên.
    }
    return (
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
    );
  }
}
export default withRouter(Pictures);
