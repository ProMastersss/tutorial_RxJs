import { of } from "rxjs";
import { expand, take } from "rxjs/operators";
import { description, output, title } from "../../App";

title("expand");

description(`Рекурсивный вызов переданной функции`);

of(1, 10)
  .pipe(
    expand((val) => {
      output(`Передано значение: ${val}`);
      return of(1 + val);
    }),
    take(5)
  )
  .subscribe((val) => output(`RESULT: ${val}`));
