import { take, map, combineAll } from "rxjs/operators";
import { interval } from "rxjs";
import { description, subscription, title } from "../../App";

title("combineAll");

description(
  `Комбинирует значения из первого стрима со значениями из второго стрима`
);

const source$ = interval(1000).pipe(take(3));
const example$ = source$.pipe(
  map((val) =>
    interval(1000).pipe(
      map((i) => `Result (${val}): ${i * 2}`),
      take(5)
    )
  )
);

example$.pipe(combineAll()).subscribe(subscription);
