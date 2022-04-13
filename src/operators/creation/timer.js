import { timer } from "rxjs";
import { take } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("timer");

description(
  `Запускает интервал через заданное количество времени. Первый аргумент - через сколько начать, второй - период испускания значений`
);

timer(3000, 1000).pipe(take(10)).subscribe(subscription);
