import React from "react";
import { withRouter } from "react-router-dom";

class Pictures extends React.Component {
    render() {
        return (
            <div class="col-lg-4">
            <div class="card my-3">
              <div class="card-body p-2">
                <div class="h6">History</div>

                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <div class="img-circle" />
                    <div class="h7 ml-2">
                      <a > Khang</a>
                      <div class="text-muted">
                        Textinggggg
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <div>
                      <img
                        class="rounded-circle"
                        width="45"
                        src="https://picsum.photos/80/80/?random?image=5"
                        alt=""
                      />
                    </div>
                    <div class="h7 ml-2">
                      <a > Khang</a>
                      <div class="text-muted">Texting</div>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <div>
                      <img
                        class="rounded-circle"
                        width="45"
                        src="https://picsum.photos/80/80/?random?image=4"
                        alt=""
                      />
                    </div>
                    <div class="h7 ml-2">
                      <a > Khang</a>
                      <div class="text-muted">Texting</div>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <div>
                      <img
                        class="rounded-circle"
                        width="45"
                        src="https://picsum.photos/80/80/?random?image=2"
                        alt=""
                      />
                    </div>
                    <div class="h7 ml-2">
                      <a > Khang</a>
                      <div class="text-muted"> Texting</div>
                    </div>
                  </div>
                </div>

                <a class="btn btn-link" >
                  ABC
                </a>
              </div>
            
            </div>
          </div>
              );
            }
          }
export default withRouter(Pictures);