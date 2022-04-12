import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("takeUntil");

description(
  `Брать элементы до того, пока не сработает событие. В данном случае таймер. То есть, через 3 секунды завершится стрим`
);

interval(500)
  .pipe(takeUntil(timer(3000)))
  .subscribe(subscription);
