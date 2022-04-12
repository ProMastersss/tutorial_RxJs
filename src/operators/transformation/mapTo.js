import { from } from "rxjs";
import { mapTo, tap } from "rxjs/operators";
import { description, output, title } from "../../App";

title("mapTo");

description(`Выбрасывает постоянное значение`);

from([1, 2, 3, 4, 5])
  .pipe(
    tap((val) => output("Исходное: " + val)),
    mapTo("Константное значение")
  )
  .subscribe((val) => output("Результат: " + val));
