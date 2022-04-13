import { interval, fromEvent } from "rxjs";
import { switchMapTo } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("switchMapTo");

description(
  `Тоже самое, что switchMap, только принимает observable, а не функцию`
);

fromEvent(document, "click")
  .pipe(switchMapTo(interval(1000)))
  .subscribe(subscription);
