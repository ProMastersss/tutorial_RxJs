import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./styles.css";

const menus = {
  Subjects: [
    {
      name: "Subject",
      path: "subjects/subject"
    },
    {
      name: "BehaviorSubject",
      path: "subjects/behaviorSubject"
    },
    {
      name: "ReplaySubject",
      path: "subjects/replaySubject"
    },
    {
      name: "AsyncSubject",
      path: "subjects/asyncSubject"
    }
  ],
  Combination: [
    {
      name: "combineAll",
      path: "operators/combination/combineAll"
    },
    {
      name: "combineLatest",
      path: "operators/combination/combineLatest"
    },
    {
      name: "concat",
      path: "operators/combination/concat"
    },
    {
      name: "concatAll",
      path: "operators/combination/concatAll"
    },
    {
      name: "endWith",
      path: "operators/combination/endWith"
    },
    {
      name: "forkJoin",
      path: "operators/combination/forkJoin"
    },
    {
      name: "merge",
      path: "operators/combination/merge"
    },
    {
      name: "mergeAll",
      path: "operators/combination/mergeAll"
    },
    {
      name: "pairwise",
      path: "operators/combination/pairwise"
    },
    {
      name: "race",
      path: "operators/combination/race"
    },
    {
      name: "startWith",
      path: "operators/combination/startWith"
    },
    {
      name: "withLatestFrom",
      path: "operators/combination/withLatestFrom"
    },
    {
      name: "zip",
      path: "operators/combination/zip"
    }
  ],
  Error_handing: [
    {
      name: "catch / catchError",
      path: "operators/error-handling/catch"
    },
    {
      name: "retry",
      path: "operators/error-handling/retry"
    },
    {
      name: "retryWhen",
      path: "operators/error-handling/retryWhen"
    },
    {
      name: "onErrorResumeNext",
      path: "operators/error-handling/onErrorResumeNext"
    }
  ],
  Conditional: [
    {
      name: "defaultIfEmpty",
      path: "operators/conditional/defaultIfEmpty"
    },
    {
      name: "every",
      path: "operators/conditional/every"
    },
    {
      name: "iif",
      path: "operators/conditional/iif"
    },
    {
      name: "sequenceEqual",
      path: "operators/conditional/sequenceEqual"
    }
  ],
  Creation: [
    {
      name: "ajax",
      path: "operators/creation/ajax"
    },
    {
      name: "create",
      path: "operators/creation/create"
    },
    {
      name: "defer",
      path: "operators/creation/defer"
    },
    {
      name: "empty",
      path: "operators/creation/empty"
    },
    {
      name: "from",
      path: "operators/creation/from"
    },
    {
      name: "fromEvent",
      path: "operators/creation/fromEvent"
    },
    {
      name: "generate",
      path: "operators/creation/generate"
    },
    {
      name: "interval",
      path: "operators/creation/interval"
    },
    {
      name: "of",
      path: "operators/creation/of"
    },
    {
      name: "range",
      path: "operators/creation/range"
    },
    {
      name: "throwError",
      path: "operators/creation/throwError"
    },
    {
      name: "timer",
      path: "operators/creation/timer"
    }
  ],
  Filtering: [
    {
      name: "audit",
      path: "operators/filtering/audit"
    },
    {
      name: "auditTime",
      path: "operators/filtering/auditTime"
    },
    {
      name: "debounce",
      path: "operators/filtering/debounce"
    },
    {
      name: "debounceTime",
      path: "operators/filtering/debounceTime"
    },
    {
      name: "distinct",
      path: "operators/filtering/distinct"
    },
    {
      name: "distinctUntilChanged",
      path: "operators/filtering/distinctUntilChanged"
    },
    {
      name: "distinctUntilKeyChanged",
      path: "operators/filtering/distinctUntilKeyChanged"
    },
    {
      name: "filter",
      path: "operators/filtering/filter"
    },
    {
      name: "find",
      path: "operators/filtering/find"
    },
    {
      name: "findIndex",
      path: "operators/filtering/findIndex"
    },
    {
      name: "first",
      path: "operators/filtering/first"
    },
    {
      name: "ignoreElements",
      path: "operators/filtering/ignoreElements"
    },
    {
      name: "last",
      path: "operators/filtering/last"
    },
    {
      name: "sample",
      path: "operators/filtering/sample"
    },
    {
      name: "skip",
      path: "operators/filtering/skip"
    },
    {
      name: "skipUntil",
      path: "operators/filtering/skipUntil"
    },
    {
      name: "skipWhile",
      path: "operators/filtering/skipWhile"
    },
    {
      name: "take",
      path: "operators/filtering/take"
    },
    {
      name: "takeUntil",
      path: "operators/filtering/takeUntil"
    },
    {
      name: "takeWhile",
      path: "operators/filtering/takeWhile"
    },
    {
      name: "takeLast",
      path: "operators/filtering/takeLast"
    },
    {
      name: "throttle",
      path: "operators/filtering/throttle"
    },
    {
      name: "throttleTime",
      path: "operators/filtering/throttleTime"
    }
  ],
  Transformation: [
    {
      name: "buffer",
      path: "operators/transformation/buffer"
    },
    {
      name: "bufferCount",
      path: "operators/transformation/bufferCount"
    },
    {
      name: "bufferTime",
      path: "operators/transformation/bufferTime"
    },
    {
      name: "bufferToggle",
      path: "operators/transformation/bufferToggle"
    },
    {
      name: "bufferWhen",
      path: "operators/transformation/bufferWhen"
    },
    {
      name: "concatMap",
      path: "operators/transformation/concatMap"
    },
    {
      name: "concatMapTo",
      path: "operators/transformation/concatMapTo"
    },
    {
      name: "exhaustMap",
      path: "operators/transformation/exhaustMap"
    },
    {
      name: "expand",
      path: "operators/transformation/expand"
    },
    {
      name: "groupBy",
      path: "operators/transformation/groupBy"
    },
    {
      name: "map",
      path: "operators/transformation/map"
    },
    {
      name: "mapTo",
      path: "operators/transformation/mapTo"
    },
    {
      name: "mergeMap / flatMap",
      path: "operators/transformation/mergeMap"
    },
    {
      name: "mergeScan",
      path: "operators/transformation/mergeScan"
    },
    {
      name: "partition",
      path: "operators/transformation/partition"
    },
    {
      name: "pluck",
      path: "operators/transformation/pluck"
    },
    {
      name: "reduce",
      path: "operators/transformation/reduce"
    },
    {
      name: "scan",
      path: "operators/transformation/scan"
    },
    {
      name: "switchMap",
      path: "operators/transformation/switchMap"
    },
    {
      name: "switchMapTo",
      path: "operators/transformation/switchMapTo"
    },
    {
      name: "toArray",
      path: "operators/transformation/toArray"
    },
    {
      name: "window",
      path: "operators/transformation/window"
    },
    {
      name: "windowCount",
      path: "operators/transformation/windowCount"
    },
    {
      name: "windowTime",
      path: "operators/transformation/windowTime"
    },
    {
      name: "windowToggle",
      path: "operators/transformation/windowToggle"
    },
    {
      name: "windowWhen",
      path: "operators/transformation/windowWhen"
    }
  ],
  Utility: [
    {
      name: "tap / do",
      path: "operators/utility/tap"
    },
    {
      name: "delay",
      path: "operators/utility/delay"
    },
    {
      name: "delayWhen",
      path: "operators/utility/delayWhen"
    },
    {
      name: "materialize",
      path: "operators/utility/materialize"
    },
    {
      name: "dematerialize",
      path: "operators/utility/dematerialize"
    },
    {
      name: "finalize / finaly",
      path: "operators/utility/finalize"
    },
    {
      name: "repeat",
      path: "operators/utility/repeat"
    },
    {
      name: "timeInteranl",
      path: "operators/utility/timeInterval"
    },
    {
      name: "timeout",
      path: "operators/utility/timeout"
    },
    {
      name: "timeoutWith",
      path: "operators/utility/timeoutWith"
    },
    {
      name: "toPromise",
      path: "operators/utility/toPromise"
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
      import("./" + path + ".js").then();
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
