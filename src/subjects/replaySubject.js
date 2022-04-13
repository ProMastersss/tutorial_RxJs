import { ReplaySubject } from "rxjs";
import { description, output, title } from "../App";

title("ReplaySubject");

description(
  `Параметр ReplaySubject задает размер буффера. Всеэлементы буфера выдаются нового подписчику`
);

const sub = new ReplaySubject(2);

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
