import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("debounceTime");

description(
  `Если разница между испускаемыми событиями меньше, чем указанное время, то НЕ выводим. Если больше, то пропускаем. То есть, кликая на alert много раз, ниего не выводится. Перестаем кликать и разница между последним и еще не нажатым кликом больше указанного, то выводится последний`
);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable
  .pipe(
    debounceTime(1000),
    map((event) => "Двойной клик")
  )
  .subscribe(subscription);
