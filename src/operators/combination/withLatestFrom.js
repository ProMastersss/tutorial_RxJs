import { take, withLatestFrom } from "rxjs/operators";
import { interval } from "rxjs";
import { description, subscription, title } from "../../App";

title("withLatestFrom");

description(
  `Аналог zip. При испускании основного стрима значения из стримов переданных withLatestFrom берется последнее испущенное их значение`
);

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = first.pipe(
  take(15),
  withLatestFrom(
    second.pipe(take(10)),
    third.pipe(take(10)),
    fourth.pipe(take(10))
  )
);

const subscribe = example.subscribe(subscription);
