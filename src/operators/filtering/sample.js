import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("sample");

description(
  `Возвращает текущий элемент observable, когда происходит испускание из переданного observable`
);

const seconds = interval(1000);
const clicks = fromEvent(document, "click");
const result = seconds.pipe(sample(clicks));
result.subscribe(subscription);
