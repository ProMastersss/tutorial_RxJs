import { empty } from "rxjs";
import {} from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("empty");

description(`Observable, который сразу же завершется. Служит как заглушка`);

empty().subscribe(subscription);
