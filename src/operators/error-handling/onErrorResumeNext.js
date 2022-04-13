import { interval, of, throwError } from "rxjs";
import { catchError, onErrorResumeNext, take } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("onErrorResumeNext");

description(
  `Если у стрима возникла ошибка, то запускаем другой стрим, переданный в onErrorResumeNext`
);

throwError("ошибка :(")
  .pipe(
    catchError((err) => of("Поймали ошибку :)")),
    onErrorResumeNext(interval(1000).pipe(take(5)))
  )
  .subscribe(subscription);
