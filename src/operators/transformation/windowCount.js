import { interval } from "rxjs";
import { windowCount, mergeAll, tap } from "rxjs/operators";
import { description, output, title } from "../../App";

title("windowCount");

description(
  `Наблюдаемый набор значений из источника, испускаемый каждый раз, когда выполняется заданный счетчик.`
);

const source = interval(1000);
const example = source.pipe(
  windowCount(4),
  tap((_) => output("NEW WINDOW!"))
);

const subscribeTwo = example.pipe(mergeAll()).subscribe((val) => output(val));
