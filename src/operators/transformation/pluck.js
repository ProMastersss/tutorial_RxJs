import { from } from "rxjs";
import { pluck } from "rxjs/operators";
import { description, output, title } from "../../App";

title("pluck");

description(`Выбирает указанное свойство из массива объектов`);

from([
  { name: "Joe", age: 30 },
  { name: "Sarah", age: 35 }
])
  .pipe(pluck("name"))
  .subscribe((val) => output(val));
