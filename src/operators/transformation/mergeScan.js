import { fromEvent, interval } from "rxjs";
import { mergeScan, takeUntil, map, scan } from "rxjs/operators";
import { description, output, title } from "../../App";

title("mergeScan");

description(`Используется для аккумулирования значений из observable`);

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");

mouseDown$
  .pipe(
    mergeScan((acc, curr) => {
      return interval(1000).pipe(
        scan((a, _) => ++a, 0),
        map((val) => val + acc),
        takeUntil(mouseUp$)
      );
    }, 0)
    // output: 1s...2s...3s...4s...
  )
  .subscribe((val) => output(`${val}s`));
