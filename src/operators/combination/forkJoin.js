import { forkJoin, interval, map, take } from "rxjs";
import { description, subscription, title } from "../../App";

title("forkJoin");

description(
  `Выдает последние значения группы стримов. Аналог Promise.all. Ожидает пока все стримы завершатся. Если будет ошибка в каком либо стриме, то все значения стримов потеряются`
);

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = forkJoin(
  first.pipe(
    map((x) => "FIRST! - " + x),
    take(1)
  ),
  second.pipe(
    map((x) => "SECOND! - " + x),
    take(2)
  ),
  third.pipe(
    map((x) => "THIRD! - " + x),
    take(3)
  ),
  fourth.pipe(
    map((x) => "FOURTH! - " + x),
    take(4)
  )
);

example.subscribe(subscription);
