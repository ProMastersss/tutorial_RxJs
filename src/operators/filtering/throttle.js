import { interval } from "rxjs";
import { take, throttle } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("throttle");

description(
  `Испускает первый элемент, далее игнорирует элементы, пока не завершится время интервала`
);

interval(500)
  .pipe(
    throttle((x) => interval(2000)),
    take(5)
  )
  .subscribe(subscription);
