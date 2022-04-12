import { fromEvent, tap, timeInterval } from "rxjs";
import { description, output, title } from "../../App";

title("timeInterval");

description(
  `Выводит время, которое прошло между последним испускаемым событием. В данном примере выводится время клика по alert между текущим и предыдущим`
);

fromEvent(document.getElementsByClassName("alert")[0], "mousedown")
  .pipe(timeInterval(), tap(console.log))
  .subscribe((i) => output(i.interval));
