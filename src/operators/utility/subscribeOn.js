import { of, merge, asyncScheduler } from "rxjs";
import { subscribeOn } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("subscribeOn");

description(
  `Определет планировщик, когда он будет обрабатывать испускаемые значения от observable`
);

const a = of(1, 2, 3).pipe(subscribeOn(asyncScheduler)); // Выводится в микротасках
const b = of(4, 5, 6);

merge(a, b).subscribe(subscription); // Поэтому порядок вывода поменялся
