import { catchError, fromEvent, of, timeout } from "rxjs";
import { description, output, title } from "../../App";

title("timeout");

description(`Возвращает ошибку, если до указанного таймаута не пришло событие`);

fromEvent(document.getElementsByClassName("alert")[0], "mousedown")
  .pipe(
    timeout(5000),
    catchError((error) => of(`Пять секунд не нажимал на alert`))
  )
  .subscribe((event) => {
    if (typeof event === "object") {
      output(`Координаты: X: ${event.offsetX}, Y: ${event.offsetY}`);
    } else {
      output(event);
    }
  });
