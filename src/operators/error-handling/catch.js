import { catchError, of, throwError } from "rxjs";
import { description, subscription, title } from "../../App";

title("catch");

description(`Перехватывает ошибку`);

throwError("ошибка :(")
  .pipe(catchError((err) => of("Перехватили ошибку :)")))
  .subscribe(subscription);
