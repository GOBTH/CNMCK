import React from "react";
import { withRouter } from "react-router-dom";

class Status extends React.Component {
    render() {
        return (
<div class="card my-3">
                  <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs nav-fill">
                      <li class="nav-item">
                        <a class="nav-link active" >
                          Text
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" >
                          Photo/Video
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body py-2">
                    <div class="d-flex">
                      <div>
                        <img
                          class="rounded-circle"
                          width="50"
                          src="https://picsum.photos/80/80/?random?image=4"
                        />
                      </div>
                      <div class="col">
                        <form action="/">
                          <div class="form-group mb-0">
                            <label
                              class="sr-only"
                              for="exampleFormControlTextarea1"
                            >
                              Example textarea
                            </label>
                            <textarea
                              class="form-control border-0"
                              id="exampleFormControlTextarea1"
                              rows="2"
                              placeholder="Write your status"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer p-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fposts btn-block btn-sm"
                        >
                          {" "}
                          <i class="fa fa-list" aria-hidden="true" /> List
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fposts btn-block btn-sm"
                        >
                          <i class="fa fa-picture-o" aria-hidden="true" />{" "}
                          Photo/video
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fposts btn-block btn-sm"
                        >
                          <i class="fa fa-user-plus" aria-hidden="true" />{" "}
                          Text...
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fposts btn-block btn-sm"
                        >
                          <i class="fa fa-ellipsis-h" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                );
            }
          }
export default withRouter(Status);