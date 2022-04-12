import { delay, of, tap } from "rxjs";
import { description, output, title } from "../../App";

title("delay");

description(`Задерживает событие на указанное время`);

const source = of(1, 2, 3);

const example = source.pipe(
  tap((value) => output("Вывод будет через 3 сек. Значение: " + value)),
  delay(3000)
);

example.subscribe((value) => output(value));
