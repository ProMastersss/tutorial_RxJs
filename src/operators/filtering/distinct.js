import { from } from "rxjs";
import { distinct } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("distinct");

description(
  `Если новое значение не изменилось от прошлых, то не испускаем его`
);

from([1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 4, 4, 4, 3, 6])
  .pipe(distinct())
  .subscribe(subscription);
