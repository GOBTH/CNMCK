import React from "react";
import { withRouter } from "react-router-dom";
import List from "./Contraction";
import History from "./History";
import Post from "./Post";
import Write from "./WriteStatus";
import Infor from "./Information";
class Pictures extends React.Component {
  
  render() {
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
