import { from } from "rxjs";
import { first } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("first");

description(`Возвращает первый элемент и завершает стрим`);

from([1, 2, 3, 4, 5]).pipe(first()).subscribe(subscription);
