import { from } from "rxjs";
import { map, tap } from "rxjs/operators";
import { description, output, title } from "../../App";

title("map");

description(`Преобразует события`);

from([1, 2, 3, 4, 5])
  .pipe(
    tap((val) => output("Исходное: " + val)),
    map((val) => val + 10)
  )
  .subscribe((val) => output("Результат: " + val));
