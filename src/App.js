import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./styles.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Operators</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <a
                  href="#utility"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi bi-hammer"></i>
                  <span className="ms-1 d-none d-sm-inline">Utility</span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="utility"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/tap')"
                    >
                      tap / do
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/delay')"
                    >
                      delay
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/delayWhen')"
                    >
                      delayWhen
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/dematerialize')"
                    >
                      dematerialize
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/finalize')"
                    >
                      finalize / finaly
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/let')"
                    >
                      let
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/repeat')"
                    >
                      repeat
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/timeInteranl')"
                    >
                      timeInteranl
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/timeout')"
                    >
                      timeout
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/timeoutWith')"
                    >
                      timeoutWith
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link px-0"
                      onClick="loadFile('utility/toPromise')"
                    >
                      toPromise
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}
