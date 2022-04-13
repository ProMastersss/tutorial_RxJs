import { empty } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("defaultIfEmpty");

description(`Observable, который сразу же завершется. Служит как заглушка`);

empty()
  .pipe(defaultIfEmpty("Значение, если пустой observable"))
  .subscribe(subscription);
