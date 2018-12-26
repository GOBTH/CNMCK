import React from "react";
import { withRouter } from "react-router-dom";
import './Login.css';
import { Keypair } from 'stellar-base';
import { connect } from 'react-redux'
class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      error: false,
      secretkey: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    if (this.state.secretkey != '') {
      e.preventDefault();
      try {
        var keys = Keypair.fromSecret(this.state.secretkey);
        if (this.props.users[keys.publicKey()] != null) {
          this.props.setKey(this.state.secretkey, keys.publicKey());
          this.props.history.push('/home');
        } else {
          this.setState({
            error: true
          });
        }
      } catch (e) {
        console.log(e);
        this.setState({
          error: true
        });
      }
    } else {
      e.preventDefault();
      this.setState({
        check: true
      });
    }
  }
  render() {
    return (
      <div>
        <section class="login-block">
          <div class="container">
            <div class="row">
              <div class="col-md-4 login-sec">
                <h2 class="text-center">Login Now</h2>
                <form class="login-form" onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-uppercase">Secret Key</label>
                    <input id="secretkey" name="secretkey" type="text" class="form-control" value={this.state.secretkey} onChange={this.onChange.bind(this)} placeholder="" />
                    {this.state.check ?
                      <div>
                        Secret Key is required
          </div> : null
                    }
                    {this.state.error ?
                      <div>
                        Secret Key is wrong
          </div> : null
                    }
                  </div>


                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" />
                      <small>Remember Me</small>
                    </label>
                    <button type="submit" class="btn btn-login float-right">Submit</button>
                  </div>

                </form>
              </div>
              <div class="col-md-8 banner-sec">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                      <div class="carousel-caption d-none d-md-block">
                        <div class="banner-text">
                          <h2>This is Heaven</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                      <div class="carousel-caption d-none d-md-block">
                        <div class="banner-text">
                          <h2>This is Heaven</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                      <div class="carousel-caption d-none d-md-block">
                        <div class="banner-text">
                          <h2>This is Heaven</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setKey: (privateKey, publicKey) => dispatch({
    type: 'setKey',
    publicKey,
    privateKey,
  }),
})

export default connect(undefined, mapDispatchToProps)(withRouter(Pictures));
