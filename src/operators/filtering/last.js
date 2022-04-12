import { from } from "rxjs";
import { last } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("last");

description(`Возвращает последний элемент и завершает стрим`);

from([1, 2, 3, 4, 5]).pipe(last()).subscribe(subscription);
