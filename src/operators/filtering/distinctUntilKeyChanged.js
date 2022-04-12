import { from } from "rxjs";
import { distinctUntilKeyChanged, pluck } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("distinctUntilKeyChanged");

description(
  `Если новое значение ПО КЛЮЧУ не изменилось от прошлого, то есть, не повторется друг за другом, то не испускаем его`
);

from([
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 1 },
  { value: 0 },
  { value: 0 },
  { value: 1 },
  { value: 1 },
  { value: 1 }
])
  .pipe(distinctUntilKeyChanged("value"), pluck("value"))
  .subscribe(subscription);
