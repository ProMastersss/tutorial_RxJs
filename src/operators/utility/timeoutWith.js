import { fromEvent, of, timeoutWith } from "rxjs";
import { description, output, title } from "../../App";

title("timeoutWith");

description(
  `Возвращает ошибку в виде observable, указанного вторым аргументом, если до указанного таймаута не пришло событие`
);

fromEvent(document.getElementsByClassName("alert")[0], "mousedown")
  .pipe(timeoutWith(5000, of(`Пять секунд не нажимал на alert`)))
  .subscribe((event) => {
    if (typeof event === "object") {
      output(`Координаты: X: ${event.offsetX}, Y: ${event.offsetY}`);
    } else {
      output(event);
    }
  });
