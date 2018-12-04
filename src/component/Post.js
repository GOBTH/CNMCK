
import React from "react";
import { withRouter } from "react-router-dom";

class Post extends React.Component {
    render() {
        return (
    <div class="card my-3">
                  <div class="card-header bg-white border-0 py-2">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex justify-content-between">
                        <a >
                          <img
                            class="rounded-circle"
                            src="https://picsum.photos/80/80/?random"
                            width="45"
                            alt=""
                          />
                        </a>
                        <div class="ml-3">
                          <div class="h6 m-0">
                            <a >1512232 - 1512239</a>
                          </div>
                          <div class="text-muted h8">
                            Hace 2 min{" "}
                            <i class="fa fa-globe" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-link dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" >
                            Action
                          </a>
                          <a class="dropdown-item" >
                            Another action
                          </a>
                          <a class="dropdown-item" >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body pt-0 pb-2">
                    1512232 - 1512239
                  </div>
                  <img
                    class="card-img-top rounded-0"
                    src="https://picsum.photos/320/250/?random"
                    alt="Card image cap"
                  />
                  <div class="card-footer bg-white border-0 p-0">
                    <div class="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                      <div />
                      <div class="h7">
                        {" "}
                        3279 <a > Commentios</a> 44845 veces{" "}
                        <a >compartido</a>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-1">
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          {" "}
                          <i class="fa fa-thumbs-up" aria-hidden="true" /> Me
                          Like
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          <i class="fa fa-comment" aria-hidden="true" />{" "}
                          Comment
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          <i class="fa fa-Share" aria-hidden="true" /> Share
                        </button>
                      </div>
                    </div>
                  </div>
  

                <div class="card my-3">
                  <div class="card-header bg-white border-0 py-2">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex justify-content-between">
                        <a >
                          <img
                            class="rounded-circle"
                            src="https://picsum.photos/80/80/?random?image=2"
                            width="45"
                            alt=""
                          />
                        </a>
                        <div class="ml-3">
                          <div class="h6 m-0">
                            <a >Angel Miguel Tantarico Vela</a> a
                            compartido{" "}
                            <a >Cuminidad Programadores peru masters</a>
                          </div>
                          <div class="text-muted h8">
                            Hace 5 min{" "}
                            <i class="fa fa-globe" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-link dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" >
                            Action
                          </a>
                          <a class="dropdown-item" >
                            Another action
                          </a>
                          <a class="dropdown-item" >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body pt-0 pb-2">
                    La fuerza es el único lenguaje que el mal entiende. ¡Derrota
                    monstruos para conseguir muchas recompensas!
                  </div>
                  <img
                    class="card-img-top rounded-0"
                    src="https://picsum.photos/g/320/250/?random"
                    alt="Card image cap"
                  />
                  <div class="card-footer bg-white border-0 p-0">
                    <div class="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                      <div />
                      <div class="h7">
                        {" "}
                        3279 <a > Commentios</a> 44845 veces{" "}
                        <a >compartido</a>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-1">
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          {" "}
                          <i class="fa fa-thumbs-up" aria-hidden="true" /> Like
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          <i class="fa fa-comment" aria-hidden="true" />{" "}
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card my-3">
                  <div class="card-header bg-white border-0 py-2">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex justify-content-between">
                        <a >
                          <img
                            class="rounded-circle"
                            src="https://picsum.photos/80/80/?random?image=0"
                            width="45"
                            alt=""
                          />
                        </a>
                        <div class="ml-3">
                          <div class="h6 m-0">
                            <a >Revista Automóvil Panamericano</a>
                          </div>
                          <div class="text-muted h8">
                            Hace 2 min{" "}
                            <i class="fa fa-globe" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-link dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" >
                            Action
                          </a>
                          <a class="dropdown-item" >
                            Another action
                          </a>
                          <a class="dropdown-item" >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body pt-0 pb-2">
                    Hola, necesito ayuda para clonar mi HDD a un SSD. Probé
                    Norton Ghost y easyup (nose que nota les dan) lo malo es que
                    estos software al iniciar desde el ssd me pide que repare el
                    sistema. Aiudaaaaa....
                  </div>
                  <img
                    class="card-img-top rounded-0"
                    src="https://picsum.photos/320/250/?random?image=0"
                    alt="Card image cap"
                  />
                  <div class="card-footer bg-white border-0 p-0">
                    <div class="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                      <div />
                      <div class="h7">
                        {" "}
                        3279 <a > Commentios</a> 44845 veces{" "}
                        <a >compartido</a>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-1">
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          {" "}
                          <i class="fa fa-thumbs-up" aria-hidden="true" /> 
                          Like
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          <i class="fa fa-comment" aria-hidden="true" />{" "}
                          Comment
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          <i class="fa fa-Share" aria-hidden="true" /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card my-3">
                  <div class="card-header bg-white border-0 py-2">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex justify-content-between">
                        <a >
                          <img
                            class="rounded-circle"
                            src="https://picsum.photos/80/80/?random?image=1"
                            width="45"
                            alt=""
                          />
                        </a>
                        <div class="ml-3">
                          <div class="h6 m-0">
                            <a >Angel Miguel Tantarico Vela</a> a
                            compartido{" "}
                            <a >Cuminidad Programadores peru masters</a>
                          </div>
                          <div class="text-muted h8">
                            Hace 5 min{" "}
                            <i class="fa fa-globe" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-link dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" >
                            Action
                          </a>
                          <a class="dropdown-item" >
                            Another action
                          </a>
                          <a class="dropdown-item" >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body pt-0 pb-2">
                    La fuerza es el único lenguaje que el mal entiende. ¡Derrota
                    monstruos para conseguir muchas recompensas!
                  </div>
                  <img
                    class="card-img-top rounded-0"
                    src="https://picsum.photos/320/250/?random?image=1"
                    alt="Card image cap"
                  />
                  <div class="card-footer bg-white border-0 p-0">
                    <div class="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                      <div />
                      <div class="h7">
                        {" "}
                        3279 <a > Commentios</a> 44845 veces{" "}
                        <a >compartido</a>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-1">
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          {" "}
                          <i class="fa fa-thumbs-up" aria-hidden="true" /> Me
                          Like
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="btn btn-fbook btn-block btn-sm"
                        >
                          <i class="fa fa-comment" aria-hidden="true" />{" "}
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>\
                </div>
              );
            }
          }
export default withRouter(Post);