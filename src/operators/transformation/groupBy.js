import { from } from "rxjs";
import { groupBy, map, mergeMap, toArray } from "rxjs/operators";
import { description, output, title } from "../../App";

title("groupBy");

description(`Группирует данные в событии`);

const people = [
  { name: "Sue", age: 25 },
  { name: "Joe", age: 30 },
  { name: "Frank", age: 25 },
  { name: "Sarah", age: 35 }
];

from(people)
  .pipe(
    groupBy((person) => person.age),
    mergeMap((group) =>
      group.pipe(
        toArray(),
        map((obj) => JSON.stringify(obj))
      )
    )
  )
  .subscribe((val) => output(val));
