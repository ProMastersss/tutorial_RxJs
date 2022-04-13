import { generate } from "rxjs";
import {} from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("generate");

description(
  `Генерирует числа в заданных диапозонах. Первый аргумент - начальное состояние, второй - условия, в которых число должно находиться, третий - инкрементация числа`
);

generate(
  1,
  (x) => x < 10,
  (x) => x + 2
).subscribe(subscription);
