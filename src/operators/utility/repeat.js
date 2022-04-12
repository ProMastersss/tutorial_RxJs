import { map, of, repeat, tap } from "rxjs";
import { description, output, title } from "../../App";

title("repeat");

description(
  `Повторяет полностью pipe Наблюдаемого, аргумент функции - количество полных повторений. Порядок вывода отличает от того, что вывожу в html через функцию, event loop`
);

of(1, 2, 3, 4, 5)
  .pipe(
    tap((val) => output("Было значение: " + val)),
    map((value) => value + 10),
    repeat(3),
    tap((val) => output("Стало значение: " + val))
  )
  .subscribe((value) => output(value));
