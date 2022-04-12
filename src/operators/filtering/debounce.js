import { interval } from "rxjs";
import { debounce } from "rxjs/operators";
import { description, output, subscription, title } from "../../App";

title("debounce");

description(
  `Если разница во времени между испускаемыми элементами меньше, чем в debounce, то НЕ выводим, иначе вывоим. Стрим не завершается`
);

interval(500)
  .pipe(
    debounce((x) => {
      const time = x * 100;

      output("Время: " + time);
      return interval(time);
    })
  )
  .subscribe(subscription);
