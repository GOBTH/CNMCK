import React from "react";
import { withRouter } from "react-router-dom";

class Status extends React.Component {
    render() {
        return (
<div class="side-left">
              <div class="d-flex">
                <div>
                  <img
                    class="rounded-circle"
                    src="https://picsum.photos/80/80/?random?image=4"
                    width="100"
                    alt=""
                  />
                </div>
                <div class="ml-3 h7">
                  <a >1512232-1512239 </a>
                </div>
              </div>

              <div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <h3 class="nav-link" >
                      Followers: 100 589
                    </h3>
                  </li>
                  <li class="nav-item">
                    <h3 class="nav-link" >
                      Following: 30000
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
           );
          }
          }
export default withRouter(Status);