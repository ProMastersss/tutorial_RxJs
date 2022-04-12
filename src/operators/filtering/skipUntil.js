import { interval, timer } from "rxjs";
import { skipUntil } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("skipUntil");

description(
  `Пропускать элементы до того, пока не сработает событие. В данном случае таймер. То есть, через 3 секунды начнут выдаваться события`
);

interval(500)
  .pipe(skipUntil(timer(3000)))
  .subscribe(subscription);
