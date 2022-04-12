import { buffer, delay, fromEvent } from "rxjs";
import { description, output, title } from "../../App";

title("buffer");

description(
  `Складывает в массив значения, пока не вернется observable. После возвращает массив этих событий`
);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable.pipe(buffer(observable.pipe(delay(3000)))).subscribe((event) => {
  if (event.length > 0) {
    output("Массив координат:");
    event.forEach((item) =>
      output(`Координаты: X: ${item.offsetX}, Y: ${item.offsetY}`)
    );
  }
});
