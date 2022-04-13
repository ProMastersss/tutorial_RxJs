import { mapTo, take } from "rxjs/operators";
import { concat, interval } from "rxjs";
import { description, subscription, title } from "../../App";

title("concat");

description(
  `Объединяет в один поток observables, но сначала ждет пока отработает первый, после обрабатывает второй, то есть по порядку`
);

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = concat(
  first.pipe(mapTo("FIRST!"), take(2)),
  second.pipe(mapTo("SECOND!"), take(2)),
  third.pipe(mapTo("THIRD"), take(2)),
  fourth.pipe(mapTo("FOURTH"), take(2))
);

const subscribe = example.subscribe(subscription);
