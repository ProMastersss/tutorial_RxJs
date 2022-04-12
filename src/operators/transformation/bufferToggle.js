import { bufferToggle, fromEvent } from "rxjs";
import { description, output, title } from "../../App";

title("bufferToggle");

description(
  `Складывает в массив значения, пока он открыт. Первый аргумент определяет, когда открыть буффер, второй аргумент определяет закрытие буффера на прием событий`
);

const buttonOpen = document.createElement("button");
buttonOpen.innerText = "Open buffer";
const btOpenObservable = fromEvent(buttonOpen, "click");

const buttonClose = document.createElement("button");
buttonClose.innerText = "Close buffer";
const btCloseObservable = fromEvent(buttonClose, "click");

const alertElement = document.getElementsByClassName("alert")[0];
alertElement.after(buttonClose);
alertElement.after(buttonOpen);

const observable = fromEvent(alertElement, "mousedown");

observable
  .pipe(bufferToggle(btOpenObservable, () => btCloseObservable))
  .subscribe((event) => {
    output("Массив координат:");
    event.forEach((item) =>
      output(`Координаты: X: ${item.offsetX}, Y: ${item.offsetY}`)
    );
  });
