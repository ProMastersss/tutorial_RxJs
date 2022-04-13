import { of, from } from "rxjs";
import { sequenceEqual, switchMap } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("sequenceEqual");

description(
  `Сравнивает на равенство два observable. Первое, которое пришло. Второе - которое передали в функцию sequenceEqual`
);

const expectedSequence = from([4, 5, 6]);

of([1, 2, 3], [4, 5, 6], [7, 8, 9])
  .pipe(switchMap((arr) => from(arr).pipe(sequenceEqual(expectedSequence))))
  .subscribe(subscription);
