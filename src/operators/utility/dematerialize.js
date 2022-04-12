import { dematerialize, map, materialize, of, tap } from "rxjs";
import { description, output, title } from "../../App";

title("dematerialize");

description(
  `Обратный процесс materialize. Из объекта Notification создает значение из 'value' объекта Notification`
);

const source = of("a", "b", 1, "c");

const example = source.pipe(
  map((val) => val.toUpperCase()),
  materialize(),
  tap((val) => output(JSON.stringify(val))),
  dematerialize()
);

example.subscribe({
  next: output,
  error: output,
  complete: output
});
