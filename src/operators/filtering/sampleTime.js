import { fromEvent } from "rxjs";
import { sampleTime } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("sampleTime");

description(
  `Возвращает текущий элемент observable, каждое заданный промежуток времени`
);

const clicks = fromEvent(document, "click");
const result = clicks.pipe(sampleTime(1000));
result.subscribe(subscription);
