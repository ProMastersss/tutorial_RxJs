import { range } from "rxjs";
import { max } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("max");

description(
  `Возвращает максимальное значение. Также принимает функцию, в которой определено как сравнивать значения`
);

const numbers = range(1, 7);
const result = numbers.pipe(max());
result.subscribe(subscription);
