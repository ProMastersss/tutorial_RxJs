import { range } from "rxjs";
import { count } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("count");

description(`Возвращает количество значений`);

const numbers = range(1, 7);
const result = numbers.pipe(count((i) => i % 2 === 0));
result.subscribe(subscription);
