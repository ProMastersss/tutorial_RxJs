import { interval, mergeMap, of, retry, throwError } from "rxjs";
import { description, subscription, title } from "../../App";

title("retuy");

description(
  `Если возникла ошибка, повторить observable снова то количество раз, которое переданно в функцию retry`
);

interval(500)
  .pipe(
    mergeMap((x) => {
      if (x > 3) {
        return throwError("X > 3");
      }

      return of(x);
    }),
    retry(2)
  )
  .subscribe(subscription);
