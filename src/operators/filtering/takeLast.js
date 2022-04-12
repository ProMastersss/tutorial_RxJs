import { from } from "rxjs";
import { takeLast } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("takeLast");

description(`Взять указанное количество элементов с конца списка`);

from([1, 2, 3, 4, 5]).pipe(takeLast(2)).subscribe(subscription);
