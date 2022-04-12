import { from, merge } from "rxjs";
import { partition, map } from "rxjs/operators";
import { description, output, title } from "../../App";

title("partition");

description(
  `Используется для разделения observable. В данном примере evens - те, у которых выполняются условия, odds - не выполняются`
);

const source = from([1, 2, 3, 4, 5, 6]);
const [evens, odds] = source.pipe(partition((val) => val % 2 === 0));

merge(
  evens.pipe(map((val) => `Четное: ${val}`)),
  odds.pipe(map((val) => `Нечетное: ${val}`))
).subscribe((val) => output(val));
