import { from } from "rxjs";
import { skipWhile } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("skipWhile");

description(
  `Пропустить указанное количество элементов, пока выполняется условие`
);

from([1, 2, 3, 4, 5])
  .pipe(skipWhile((x) => x < 3))
  .subscribe(subscription);
