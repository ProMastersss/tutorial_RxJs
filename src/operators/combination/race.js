import { mapTo, take } from "rxjs/operators";
import { interval, race } from "rxjs";
import { description, subscription, title } from "../../App";

title("race");

description(`Берет для вывода тот стрим, от которого придет первое сообщение`);

const first = interval(500);
const second = interval(2000);
const third = interval(1000);
const fourth = interval(1500);

const example = race(
  first.pipe(mapTo("FIRST!"), take(5)),
  second.pipe(mapTo("SECOND!"), take(5)),
  third.pipe(mapTo("THIRD"), take(5)),
  fourth.pipe(mapTo("FOURTH"), take(5))
);

const subscribe = example.subscribe(subscription);
