import { Subject } from "rxjs";
import { description, subscription, title } from "../App";

title("Subject");

description(
  `Объект как observable, так и observer (subscriber). Он как испускает события, так и подписывает`
);

const sub = new Subject();

sub.next(1);
sub.subscribe(subscription);
sub.next(2);
sub.subscribe(subscription);
sub.next(3);
