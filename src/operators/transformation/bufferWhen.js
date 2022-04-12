import { bufferWhen, fromEvent } from "rxjs";
import { description, output, title } from "../../App";

title("bufferWhen");

description(
  `Складывает в массив значения и выдает этот массив, когда выдастся указанный observable`
);

const buttonEmit = document.createElement("button");
buttonEmit.innerText = "Emits buffer";
const btEmitObservable = fromEvent(buttonEmit, "click");

const alertElement = document.getElementsByClassName("alert")[0];
alertElement.after(buttonEmit);

const observable = fromEvent(alertElement, "mousedown");

observable.pipe(bufferWhen(() => btEmitObservable)).subscribe((event) => {
  output("Массив координат:");
  event.forEach((item) =>
    output(`Координаты: X: ${item.offsetX}, Y: ${item.offsetY}`)
  );
});
