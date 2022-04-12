import { delayWhen, of, tap, timer } from "rxjs";
import { description, output, title } from "../../App";

title("delayWhen");

description(
  `Задерживает событие на указанное время определяется функцией. Разница в выводе будет 1 секунда`
);

const source = of(1, 2, 3);

const example = source.pipe(
  tap((value) => output(`Вывод будет через ${value} сек`)),
  delayWhen((value) => timer(value * 1000))
);

example.subscribe((value) => output(value));
