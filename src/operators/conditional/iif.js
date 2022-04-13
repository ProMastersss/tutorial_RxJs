import { iif, mergeMap, of } from "rxjs";
import { description, subscription, title } from "../../App";

title("iif");

description(
  `Первый аргумент - условие. Второй - Вернет этот observable, если условие выполнится. Третий - observable, если условте не выполнится`
);

of(1, 2, 3, 4, 5)
  .pipe(
    mergeMap((x) =>
      iif(() => x % 2 === 0, of(`${x} четное`), of(`${x} нечетное`))
    )
  )
  .subscribe(subscription);
