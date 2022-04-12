import { finalize, map, of, tap } from "rxjs";
import { description, output, title } from "../../App";

title("finalize");

description(
  `Вызывается, когда observable(Наблюдаемый) завершается или в нем произошла ошибка. Останавливается на ошибке`
);

let source = of(1, 2, 3, 4, 5);

const example = source.pipe(
  map((value) => value + 10),
  finalize(() => output("Завершилось сложение"))
);

example.subscribe((value) => output(value));

// Error
of("1", "2", 3, "4", "5")
  .pipe(
    map((value) => value.toUpperCase()),
    finalize(() => output("Завершилось c ошибкой"))
  )
  .subscribe((value) => output(value));
