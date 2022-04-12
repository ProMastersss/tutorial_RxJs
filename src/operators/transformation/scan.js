import { of } from "rxjs";
import { scan } from "rxjs/operators";
import { description, output, title } from "../../App";

title("scan");

description(`Вычисляет сумму элементов, выплевывая промежуточные вычисления`);

of(1, 2, 3, 4, 5)
  .pipe(scan((acc, val) => acc + val))
  .subscribe((val) => output("Промежуточное значение: " + val));
