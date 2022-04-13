import { concatAll, delay, map, take } from "rxjs/operators";
import { interval, of } from "rxjs";
import { description, subscription, title } from "../../App";

title("concatAll");

description(
  `Объединяет observables в один поток, ожидая завершения внутреннего стрима перед испусканием`
);

const first = interval(100);

const example = first.pipe(
  map((x) => of(x).pipe(delay(Math.random() * 1000))),
  take(10),
  concatAll()
);

const subscribe = example.subscribe(subscription);
