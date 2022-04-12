import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./styles.css";

const menus = {
  Filtering: [
    {
      name: "audit",
      path: "filtering/audit"
    },
    {
      name: "auditTime",
      path: "filtering/auditTime"
    },
    {
      name: "debounce",
      path: "filtering/debounce"
    },
    {
      name: "debounceTime",
      path: "filtering/debounceTime"
    },
    {
      name: "distinct",
      path: "filtering/distinct"
    },
    {
      name: "distinctUntilChanged",
      path: "filtering/distinctUntilChanged"
    },
    {
      name: "distinctUntilKeyChanged",
      path: "filtering/distinctUntilKeyChanged"
    },
    {
      name: "filter",
      path: "filtering/filter"
    },
    {
      name: "find",
      path: "filtering/find"
    },
    {
      name: "findIndex",
      path: "filtering/findIndex"
    },
    {
      name: "first",
      path: "filtering/first"
    },
    {
      name: "ignoreElements",
      path: "filtering/ignoreElements"
    },
    {
      name: "last",
      path: "filtering/last"
    },
    {
      name: "sample",
      path: "filtering/sample"
    },
    {
      name: "skip",
      path: "filtering/skip"
    },
    {
      name: "skipUntil",
      path: "filtering/skipUntil"
    },
    {
      name: "skipWhile",
      path: "filtering/skipWhile"
    },
    {
      name: "take",
      path: "filtering/take"
    },
    {
      name: "takeUntil",
      path: "filtering/takeUntil"
    },
    {
      name: "takeWhile",
      path: "filtering/takeWhile"
    },
    {
      name: "takeLast",
      path: "filtering/takeLast"
    },
    {
      name: "throttle",
      path: "filtering/throttle"
    },
    {
      name: "throttleTime",
      path: "filtering/throttleTime"
    }
  ],
  Transformation: [
    {
      name: "buffer",
      path: "transformation/buffer"
    },
    {
      name: "bufferCount",
      path: "transformation/bufferCount"
    },
    {
      name: "bufferTime",
      path: "transformation/bufferTime"
    },
    {
      name: "bufferToggle",
      path: "transformation/bufferToggle"
    },
    {
      name: "bufferWhen",
      path: "transformation/bufferWhen"
    },
    {
      name: "concatMap",
      path: "transformation/concatMap"
    },
    {
      name: "concatMapTo",
      path: "transformation/concatMapTo"
    },
    {
      name: "exhaustMap",
      path: "transformation/exhaustMap"
    },
    {
      name: "expand",
      path: "transformation/expand"
    },
    {
      name: "groupBy",
      path: "transformation/groupBy"
    },
    {
      name: "map",
      path: "transformation/map"
    },
    {
      name: "mapTo",
      path: "transformation/mapTo"
    },
    {
      name: "mergeMap / flatMap",
      path: "transformation/mergeMap"
    },
    {
      name: "mergeScan",
      path: "transformation/mergeScan"
    },
    {
      name: "partition",
      path: "transformation/partition"
    },
    {
      name: "pluck",
      path: "transformation/pluck"
    },
    {
      name: "reduce",
      path: "transformation/reduce"
    },
    {
      name: "scan",
      path: "transformation/scan"
    },
    {
      name: "switchMap",
      path: "transformation/switchMap"
    },
    {
      name: "switchMapTo",
      path: "transformation/switchMapTo"
    },
    {
      name: "toArray",
      path: "transformation/toArray"
    },
    {
      name: "window",
      path: "transformation/window"
    },
    {
      name: "windowCount",
      path: "transformation/windowCount"
    },
    {
      name: "windowTime",
      path: "transformation/windowTime"
    },
    {
      name: "windowToggle",
      path: "transformation/windowToggle"
    },
    {
      name: "windowWhen",
      path: "transformation/windowWhen"
    }
  ],
  Utility: [
    {
      name: "tap / do",
      path: "utility/tap"
    },
    {
      name: "delay",
      path: "utility/delay"
    },
    {
      name: "delayWhen",
      path: "utility/delayWhen"
    },
    {
      name: "materialize",
      path: "utility/materialize"
    },
    {
      name: "dematerialize",
      path: "utility/dematerialize"
    },
    {
      name: "finalize / finaly",
      path: "utility/finalize"
    },
    {
      name: "repeat",
      path: "utility/repeat"
    },
    {
      name: "timeInteranl",
      path: "utility/timeInterval"
    },
    {
      name: "timeout",
      path: "utility/timeout"
    },
    {
      name: "timeoutWith",
      path: "utility/timeoutWith"
    },
    {
      name: "toPromise",
      path: "utility/toPromise"
    }
  ]
};

const clear = () => {
  ["title", "description", "log"].forEach(
    (className) =>
      (document.getElementsByClassName(className)[0].innerHTML = "")
  );
};

export const title = (content) => {
  document.getElementsByClassName("title")[0].innerHTML += content;
};

export const description = (content) => {
  document.getElementsByClassName("description")[0].innerHTML += content;
};

export const output = (content) => {
  document.getElementsByClassName("log")[0].innerHTML += content + "<br>";
};

export const subscription = {
  next: (val) => output("Результат: " + val),
  error: (err) => output("Error: " + err),
  complete: () => output("Завершен!")
};

export default function App() {
  function loadFile(path) {
    new Promise(function (resolve) {
      clear();
      resolve();
    }).then(() => {
      import("./operators/" + path + ".js").then();
    });
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
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
              {Object.entries(menus).map(([parentName, menu]) => (
                <li key={parentName}>
                  <a
                    href={`#${parentName}`}
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi bi-hammer"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      {parentName}
                    </span>
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id={parentName}
                    data-bs-parent={`#${parentName}`}
                  >
                    {menu.map((menuItem) => (
                      <li key={menuItem.path} className="w-100">
                        <button
                          className="nav-link px-0"
                          onClick={() => loadFile(menuItem.path)}
                        >
                          {menuItem.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-md-9 col-xl-10">
          <h3 className="title">""</h3>
          <div className="row">
            <div className="alert alert-info" role="alert">
              <i className="bi bi-info-circle-fill"></i>
              <div className="description"></div>
            </div>

            <div className="log col-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
