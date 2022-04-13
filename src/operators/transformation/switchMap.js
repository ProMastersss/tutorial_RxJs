import { interval, fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("switchMap");

description(
  `При поступлении нового события отписывается от старого и подписывается на новое`
);

fromEvent(document, "click")
  .pipe(switchMap(() => interval(1000)))
  .subscribe(subscription);
