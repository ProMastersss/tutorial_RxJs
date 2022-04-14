import { of } from "rxjs";
import { isEmpty } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("isEmpty");

description(`Возвращает true/false, пустое observable пустой`);

of(1).pipe(isEmpty()).subscribe(subscription);
of().pipe(isEmpty()).subscribe(subscription);
