import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("fromEvent");

description(`Создает наблюдаемое из события`);

const observable = fromEvent(
  document.getElementsByClassName("alert")[0],
  "mousedown"
);

observable.pipe(map((e) => "Клик")).subscribe(subscription);
