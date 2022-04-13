import { take } from "rxjs/operators";
import { combineLatest, interval } from "rxjs";
import { description, subscription, title } from "../../App";

title("combineLatest");

description(
  `Испускает массив значений стримов, как только появляется новое испускание у какого-либо, беря у остальных стримов последнее значение`
);

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = combineLatest(first, second, third, fourth).pipe(take(10));

const subscribe = example.subscribe(subscription);
