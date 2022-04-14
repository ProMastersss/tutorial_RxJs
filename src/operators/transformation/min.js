import { range } from "rxjs";
import { min } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("min");

description(
  `Возвращает минимальное значение. Также принимает функцию, в которой определено как сравнивать значения`
);

const numbers = range(1, 7);
const result = numbers.pipe(min());
result.subscribe(subscription);
