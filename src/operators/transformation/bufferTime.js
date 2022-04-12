import { bufferTime, fromEvent } from "rxjs";
import { description, output, title } from "../../App";

title("bufferTime");

description(
  `Складывает в массив значения, пока не пройдет указанное время. После возвращает массив этих событий`
);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable.pipe(bufferTime(5000)).subscribe((event) => {
  output("Массив координат:");
  event.forEach((item) =>
    output(`Координаты: X: ${item.offsetX}, Y: ${item.offsetY}`)
  );
});
