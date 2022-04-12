import { of } from "rxjs";
import { reduce } from "rxjs/operators";
import { description, output, title } from "../../App";

title("reduce");

description(
  `Похож на scan. Вычисляет сумму элементов, а после выплевывает observable, когда скан выплевывает после каждого увеличения`
);

of(1, 2, 3, 4)
  .pipe(reduce((acc, val) => acc + val))
  .subscribe((val) => output("Sum: " + val));
