import { timer, interval } from "rxjs";
import { tap, windowToggle, mergeAll } from "rxjs/operators";
import { description, output, title } from "../../App";

title("windowToggle");

description(
  `Сбор и выброс наблюдаемых значений из источника между открытием и закрытием выброса`
);

//emit immediately then every 1s
const source = timer(0, 1000);
//toggle window on every 5
const toggle = interval(5000);
const example = source.pipe(
  //turn window on every 5s
  windowToggle(toggle, (val) => interval(val * 1000)),
  tap((_) => output("NEW WINDOW!"))
);

const subscribeTwo = example.pipe(mergeAll()).subscribe((val) => output(val));
