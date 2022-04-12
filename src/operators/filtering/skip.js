import { from } from "rxjs";
import { skip } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("skip");

description(`Пропустить указанное количество элементов`);

from([1, 2, 3, 4, 5]).pipe(skip(3)).subscribe(subscription);
