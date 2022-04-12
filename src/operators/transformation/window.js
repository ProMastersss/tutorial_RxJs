import { timer, interval } from "rxjs";
import { window, scan, mergeAll } from "rxjs/operators";
import { description, output, title } from "../../App";

title("window");

description(
  `Похож на buffer. Разветвляйте исходные значения Observable как вложенные Observable при каждом испускании. Функция, которая возвращает Observable для окон, которые являются Observable, испускающими значения исходного Observable`
);

//emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(window(interval(3000)));
const count = example.pipe(scan((acc, curr) => acc + 1, 0));
const subscribe = count.subscribe((val) => output(`Window ${val}:`));
const subscribeTwo = example.pipe(mergeAll()).subscribe((val) => output(val));
