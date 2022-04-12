import { from } from "rxjs";
import { take } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("take");

description(`Взять указанное количество элементов`);

from([1, 2, 3, 4, 5]).pipe(take(3)).subscribe(subscription);
