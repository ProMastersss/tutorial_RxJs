import { map, of, tap } from "rxjs";
import { description, output, title } from "../../App";

title("tap / do");

description(
  `Постучать / сделать - используется для ведения лога, получает событие, остальные по цепочке передадутся дальше`
);

const source = of(1, 2, 3, 4, 5);

const example = source.pipe(
  tap((value) => output("К " + value + " прибавить 10")),
  map((value) => value + 10),
  tap((value) => output("получаем " + value))
);

example.subscribe((value) => output(value));
