import { every, of } from "rxjs";
import { description, subscription, title } from "../../App";

title("every");

description(`Если все значения удовлетворяют условию, то true, иначе false`);

of(1, 2, 3, 4, 5)
  .pipe(every((x) => x < 10))
  .subscribe(subscription);

of(1, 2, 3, 4, 5)
  .pipe(every((x) => x % 2 === 0))
  .subscribe(subscription);
