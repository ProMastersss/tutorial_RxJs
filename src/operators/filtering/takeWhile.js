import { from } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("takeWhile");

description(
  `Брать элементы, пока выполняется условие. Стрим завершается на элементе, который не удовлетворяет условию`
);

from([1, 2, 3, 4, 5])
  .pipe(takeWhile((x) => x < 3))
  .subscribe(subscription);
