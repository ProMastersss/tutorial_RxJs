import { from } from "rxjs";
import { find } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("find");

description(
  `Ищет элемент, который удовлетворяет условию и его возвращает, иначе undefined`
);

from([1, 2, 3, 4, 5])
  .pipe(find((x) => x === 3))
  .subscribe(subscription);
