import { of } from "rxjs";
import {} from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("of");

description(
  `Выдает переменное количество значений в последовательности, а затем выдает полное уведомление.`
);

of(1, 2, 3, 4, 5).subscribe(subscription);
of([1, 2, 3, 4, 5]).subscribe(subscription);
