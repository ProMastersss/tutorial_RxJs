import { BehaviorSubject } from "rxjs";
import { description, subscription, title } from "../App";

title("BehaviorSubject");

description(
  `Аналогичен Subject, только задает начальное значение для подписчиков. При подписке нового подписчика, ему сразу же выдается текущее значение BehaviorSubjecta`
);

const sub = new BehaviorSubject("Начальное значение");

sub.subscribe(subscription);
sub.next(1);
sub.subscribe(subscription);
sub.next(2);
sub.subscribe(subscription);
sub.next(3);
