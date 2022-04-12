import { fromEvent, interval } from "rxjs";
import { audit, map } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("audit");

description(
  `В течении указанного времени, игнорируются все испускания. По истечению времени, испускается последнее`
);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable
  .pipe(
    audit((x) => interval(1000)),
    map((e) => "Последний клик в течении секунды")
  )
  .subscribe(subscription);
