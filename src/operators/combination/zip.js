import { mapTo, take } from "rxjs/operators";
import { interval, zip } from "rxjs";
import { description, subscription, title } from "../../App";

title("zip");

description(
  `Складывает все результаты стримов в массив, испуская его после того, как все стримы испустят по одному значению. Так как у первого стрима меньше значений, то общий стрим завершается, когда у какого то стрима закончатся элементы`
);

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = zip(
  first.pipe(mapTo("FIRST!"), take(2)),
  second.pipe(mapTo("SECOND!"), take(3)),
  third.pipe(mapTo("THIRD"), take(3)),
  fourth.pipe(mapTo("FOURTH"), take(3))
);

const subscribe = example.subscribe(subscription);
