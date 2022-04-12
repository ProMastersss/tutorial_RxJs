import { timer } from "rxjs";
import { windowTime, tap, mergeAll } from "rxjs/operators";
import { description, output, title } from "../../App";

title("windowTime");

description(
  `Наблюдаемая совокупность значений, собранных из источника за каждый предоставленный промежуток времени.`
);

const source = timer(0, 1000);
const example = source.pipe(
  windowTime(3000),
  tap((_) => output("NEW WINDOW!"))
);

const subscribeTwo = example.pipe(mergeAll()).subscribe((val) => output(val));
