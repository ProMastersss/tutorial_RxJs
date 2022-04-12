import { interval, timer } from "rxjs";
import { windowWhen, tap, mergeAll } from "rxjs/operators";
import { description, output, title } from "../../App";

title("windowWhen");

description(
  `Закрытие окна на заданном временном интервале, излучающем наблюдаемое количество собранных значений из источника.`
);

const source = timer(0, 1000);
const example = source.pipe(
  //close window every 5s and emit observable of collected values from source
  windowWhen(() => interval(5000)),
  tap((_) => output("NEW WINDOW!"))
);

const subscribeTwo = example.pipe(mergeAll()).subscribe((val) => output(val));
