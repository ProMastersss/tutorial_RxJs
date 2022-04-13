import { delay, interval, map, retryWhen, tap } from "rxjs";
import { description, output, subscription, title } from "../../App";

title("retuy");

description(
  `Если возникла ошибка, повторить observable снова то количество раз, которое переданно в функцию retry`
);

interval(500)
  .pipe(
    map((x) => {
      if (x > 3) {
        throw new Error("X > 3");
      }

      return x;
    }),
    retryWhen((err) =>
      err.pipe(
        tap((val) => output(`Ошибка ${val}. Повтор через три секунды`)),
        delay(3000)
      )
    )
  )
  .subscribe(subscription);
