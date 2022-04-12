import { map, materialize, of } from "rxjs";
import { description, output, title } from "../../App";

title("materialize");

description(
  `Оборачивает значение в объект Notification с метаданными. Полезно для доп. обработки. Выводит события до ошибки`
);

const source = of("a", "b", 1, "c");

const example = source.pipe(
  map((val) => val.toUpperCase()),
  materialize()
);

example.subscribe((val) => output(JSON.stringify(val)));
