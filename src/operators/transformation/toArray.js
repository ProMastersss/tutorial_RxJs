import { interval, of, take, toArray } from "rxjs";
import { description, subscription, title } from "../../App";

title("toArray");

description(`Преобразование испускаемых данных в массив`);

of(1, 2, 3, 4, 5).pipe(toArray()).subscribe(subscription);
interval(500).pipe(take(10), toArray()).subscribe(subscription);
