import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("distinctUntilChanged");

description(
  `Если новое значение не изменилось от прошлого, то есть, не повторется друг за другом, то не испускаем его`
);

from([1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 4, 4, 4, 3, 6])
  .pipe(distinctUntilChanged())
  .subscribe(subscription);
