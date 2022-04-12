import { from } from "rxjs";
import { filter } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("filter");

description(`Фильтрует элементы`);

from([1, 2, 3, 4, 5])
  .pipe(filter((x) => x % 2 === 0))
  .subscribe(subscription);
