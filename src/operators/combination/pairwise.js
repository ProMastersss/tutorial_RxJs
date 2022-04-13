import { interval, pairwise, take } from "rxjs";
import { description, subscription, title } from "../../App";

title("pairwise");

description(
  `Выдает кортеж из двух элементов. Где первый это предыдущий, второй - текущий`
);

interval(1000).pipe(pairwise(), take(5)).subscribe(subscription);
