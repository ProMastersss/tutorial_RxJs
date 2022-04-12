import { bufferCount, fromEvent } from "rxjs";
import { description, output, title } from "../../App";

title("bufferCount");

description(
  `Складывает в массив значения, пока не наберет указанное количество элементов. После возвращает массив этих событий`
);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable.pipe(bufferCount(3)).subscribe((event) => {
  output("Массив координат:");
  event.forEach((item) =>
    output(`Координаты: X: ${item.offsetX}, Y: ${item.offsetY}`)
  );
});
