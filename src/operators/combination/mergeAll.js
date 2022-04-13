import { mergeAll, delay, map, take } from "rxjs/operators";
import { interval, of } from "rxjs";
import { description, subscription, title } from "../../App";

title("mergeAll");

description(
  `Объединяет observables в один поток без ожидания окончания внутреннего стрима`
);

const first = interval(100);

const example = first.pipe(
  map((x) => of(x).pipe(delay(Math.random() * 1000))),
  take(10),
  mergeAll()
);

const subscribe = example.subscribe(subscription);
