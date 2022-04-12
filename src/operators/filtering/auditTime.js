import { fromEvent } from "rxjs";
import { auditTime, map } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("auditTime");

description(`То же, что и audit. Сокращенная запись`);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable
  .pipe(
    auditTime(1000),
    map((e) => "Последний клик в течении секунды")
  )
  .subscribe(subscription);
