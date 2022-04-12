import { from } from "rxjs";
import { findIndex } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("findIndex");

description(
  `Ищет элемент и возвращает его индекс, который удовлетворяет условию, иначе -1`
);

from([1, 2, 3, 4, 5])
  .pipe(findIndex((x) => x === 3))
  .subscribe(subscription);
