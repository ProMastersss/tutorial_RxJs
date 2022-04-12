import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";
import { description, output, title } from "../../App";

title("exhaustMap");

description(
  `Игнорирует приходящие события, пока не завершится переданное observable, то есть в примере это interval, который создает события отсчета до 5`
);

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  exhaustMap((ev) => {
    console.log("Click");
    return interval(1000).pipe(take(5));
  })
);
result.subscribe((x) => output(x));
