import { Observable } from "rxjs";
import { description, subscription, title } from "../../App";

title("create");

description(`Создает observable`);

Observable.create((subscriber) => {
  subscriber.next("Hello");
  subscriber.next("World");
  subscriber.complete();
}).subscribe(subscription);
