import React from "react";
import { withRouter } from "react-router-dom";
class Status extends React.Component {
  render() {
    const { account } = this.props;
    console.log(account);
    return (
      <div class="side-left">
        <div class="d-flex">
          <div>
            <img
              class="rounded-circle"
              src={'data:image/jpeg;base64,' + account.picture}
              width="100"
              alt=""
            />
          </div>
          <div class="ml-3 h7">
            <a >{account.name} </a>
          </div>
        </div>

        <div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <h3 class="nav-link" >
                Balance: {account.balance / 100000000} TRE
              </h3>
            </li>
            <li class="nav-item">
              <h3 class="nav-link" >
                Energy: {parseFloat(account.energy).toFixed(2)} OXY
              </h3>
            </li>
            <li class="nav-item">
              <h3 class="nav-link" >
                Followings: {account.followings ? account.followings.length : 0}
              </h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Status);