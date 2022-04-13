import { AsyncSubject } from "rxjs";
import { description, output, title } from "../App";

title("AsyncSubject");

description(
  `AsyncSubject испускает последнее значение тогда и только тогда, когда стим завершается и все подписчики получают это последнее значение`
);

const sub = new AsyncSubject();

sub.subscribe((val) => {
  output("Subscriber 1 - Результат: " + val);
});
sub.next(1);
sub.subscribe((val) => {
  output("Subscriber 2 - Результат: " + val);
});
sub.next(2);
sub.subscribe((val) => {
  output("Subscriber 3 - Результат: " + val);
});
sub.next(3);
sub.subscribe((val) => {
  output("Subscriber 4 - Результат: " + val);
});

sub.complete();
